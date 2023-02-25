import { AuthLayout } from "@components/layouts/AuthLayout";
import { MainLayout } from "@components/layouts/MainLayout";
import { LoginPage } from "@pages/LoginPage";
import { RegisterPage } from "@pages/RegisterPage";
import { Navigate } from "react-router-dom";

const routes = (isLoggedIn: boolean) =>
  !isLoggedIn
    ? [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/login",
              element: <LoginPage />,
            },
            { path: "/register", element: <RegisterPage /> },
          ],
        },
        {
          path: "*",
          element: <Navigate to="/login" />,
        },
      ]
    : [
        {
          element: <MainLayout />,
          children: [
            {
              path: "/football-pitches",
              element: <div>Football pitches</div>,
            },
          ],
        },
      ];

export { routes };
