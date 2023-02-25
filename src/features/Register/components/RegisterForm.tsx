import { yupResolver } from "@hookform/resolvers/yup";
import SendIcon from "@mui/icons-material/Send";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";
import { registerUser } from "../api";
import { RegisterUserFormProps } from "../types/RegisterUserFormProps";
import { AccountDataForm } from "./AccountDataForm";
import { FormStepper } from "./FormStepper";
import { PersonalInfoForm } from "./PersonalInfoForm";

const schema = object<RegisterUserFormProps>({
  email: string().required("Field required").email("Invalid email format"),
  password: string()
    .required("Field required")
    .min(6, "Must be at least 6 characters long")
    .matches(/[A-Z]+/, "Must have at least one upper case")
    .matches(/[0-9]+/, "Must have at least one digit"),
  confirmPassword: string()
    .oneOf([ref("password"), ""], "Passwords don't match")
    .required("Field required"),
  nickname: string().required("Field required"),
});

function RegisterForm() {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const formMethods = useForm<RegisterUserFormProps>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: RegisterUserFormProps) => {
      return registerUser(data);
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  const onSubmitHandler: SubmitHandler<RegisterUserFormProps> = async (
    data
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (err) {
      enqueueSnackbar((err as Error)?.message, { variant: "error" });
    }
  };

  return (
    <Grid container direction="column" minWidth={340} height="80%">
      <FormProvider {...formMethods}>
        <form
          noValidate
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Grid container direction="column" rowGap={4} flex={9}>
            <FormStepper
              activeFormIndex={activeFormIndex}
              setActiveFormIndex={setActiveFormIndex}
              isAccountDataValid={
                !(
                  !!formMethods.formState.errors["email"] ||
                  !!formMethods.formState.errors["password"] ||
                  !!formMethods.formState.errors["confirmPassword"]
                )
              }
              isAccountDataDirty={
                !!formMethods.formState.dirtyFields.email ||
                !!formMethods.formState.dirtyFields.password ||
                !!formMethods.formState.dirtyFields.confirmPassword
              }
              isPersonalInfoValid={!!!formMethods.formState.errors["nickname"]}
              isPersonalInfoDirty={!!formMethods.formState.dirtyFields.nickname}
            />

            {activeFormIndex === 0 && <AccountDataForm />}
            {activeFormIndex === 1 && <PersonalInfoForm />}
          </Grid>

          <Grid container direction="column" flex={1}>
            <Button
              type="submit"
              variant="contained"
              endIcon={
                mutation.isLoading ? (
                  <CircularProgress color="secondary" size={20} />
                ) : (
                  <SendIcon />
                )
              }
              disabled={!formMethods.formState.isValid || mutation.isLoading}
            >
              Register
            </Button>

            <Grid
              container
              alignItems="flex-end"
              justifyContent="center"
              columnGap={1}
              marginTop={2}
            >
              <Typography>Already have account?</Typography>
              <Typography
                component="a"
                color="primary.light"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Typography>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Grid>
  );
}

export { RegisterForm };
