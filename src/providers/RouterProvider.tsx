import { ProtectedRoute } from "@components/ProtectedRoute";
import { LoginPage } from "@pages/LoginPage";
import { RegisterPage } from "@pages/RegisterPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="football-pitches" element={<div>Football pitches</div>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </>
  )
);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
