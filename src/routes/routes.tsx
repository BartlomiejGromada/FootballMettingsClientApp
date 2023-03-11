import { AuthLayout } from "layouts/AuthLayout";
import { MainLayout } from "layouts/MainLayout";
import { Navigate } from "react-router-dom";
import { protectedPages, protectedPagesPathes } from "./protectedPages";
import { publicPages, publicPagesPathes } from "./publicPages";

const routes = (isLoggedIn: boolean) =>
  !isLoggedIn
    ? [
        {
          element: <AuthLayout />,
          children: publicPages,
        },
        {
          path: "*",
          element: <Navigate to={publicPagesPathes.LoginPagePath} />,
        },
      ]
    : [
        {
          element: <MainLayout />,
          children: protectedPages,
        },
        {
          path: "*",
          element: (
            <Navigate to={protectedPagesPathes.FootballPitchesPagePath} />
          ),
        },
      ];

export { routes };
