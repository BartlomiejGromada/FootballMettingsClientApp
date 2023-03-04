import { EmailTextField, PasswordTextField } from "@components/mui";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { LoginUserFormProps } from "../types/LoginUserFormProps";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "redux/store";
import { login } from "redux/slices/authSlice";
import { AxiosResponse } from "axios";

const schema = object<LoginUserFormProps>({
  email: string().required("Field required").email("Invalid email format"),
  password: string()
    .required("Field required")
    .min(6, "Must be at least 6 characters long")
    .matches(/[A-Z]+/, "Must have at least one upper case")
    .matches(/[0-9]+/, "Must have at least one digit"),
});

function LoginForm() {
  const formMethods = useForm<LoginUserFormProps>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: (data: LoginUserFormProps) => {
      return loginUser(data);
    },
    onSuccess: (response: AxiosResponse<string>) => {
      dispatch(login(response.data));
      navigate("/");
    },
  });

  const onSubmitHandler: SubmitHandler<LoginUserFormProps> = async (data) => {
    try {
      await mutation.mutateAsync(data);
    } catch (err) {
      enqueueSnackbar((err as Error)?.message, { variant: "error" });
    }
  };

  return (
    <Grid container direction="column" minWidth={340} flex={8}>
      <FormProvider {...formMethods}>
        <form
          noValidate
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Grid container direction="column" flex={9} rowGap={2}>
            <EmailTextField />

            <PasswordTextField />
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
              Login
            </Button>

            <Grid
              container
              alignItems="flex-end"
              justifyContent="center"
              columnGap={1}
              marginTop={2}
            >
              <Typography>Don't have an account?</Typography>
              <Typography
                component="a"
                color="primary.light"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </Typography>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Grid>
  );
}

export { LoginForm };
