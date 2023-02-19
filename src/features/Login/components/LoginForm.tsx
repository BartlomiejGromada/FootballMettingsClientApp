import { EmailTextField, PasswordTextField } from "@components/mui";
import { Button, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { LoginUserFormProps } from "../types/LoginUserFormProps";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

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

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<LoginUserFormProps> = (data) => {
    console.log("data", data);
  };

  return (
    <Grid container direction="column" minWidth={340} height="80%">
      <FormProvider {...formMethods}>
        <form
          noValidate
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Grid container direction="column" flex={9} rowGap={2}>
            <EmailTextField />

            <PasswordTextField />
          </Grid>

          <Grid container direction="column" flex={1}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={!formMethods.formState.isValid}
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
