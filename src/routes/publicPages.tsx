import { LoginPage } from "@pages/LoginPage";
import { RegisterPage } from "@pages/RegisterPage";

export const LoginPagePath = "/login";
export const RegisterPagePath = "/register";

interface PublicPage {
  name: string;
  path: string;
  element: JSX.Element;
}

export const publicPagesPathes = {
  LoginPagePath: "/login",
  RegisterPagePath: "/register",
};

export const publicPages: PublicPage[] = [
  {
    name: "Login",
    path: publicPagesPathes.LoginPagePath,
    element: <LoginPage />,
  },
  {
    name: "Register",
    path: publicPagesPathes.RegisterPagePath,
    element: <RegisterPage />,
  },
];
