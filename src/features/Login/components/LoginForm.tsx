import { EmailTextField, PasswordTextField } from "@components/mui";
import { Button, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" minWidth={340} height="80%">
      <Grid container direction="column" flex={9} rowGap={2}>
        <EmailTextField />

        <PasswordTextField />
      </Grid>

      <Grid container direction="column" flex={1}>
        <Button variant="contained" endIcon={<SendIcon />}>
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
    </Grid>
  );
}

export { LoginForm };
