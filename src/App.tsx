import { routes } from "@routes/routes";
import { useRoutes } from "react-router-dom";
import { useAppSelector } from "redux/store";

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.user);

  const router = useRoutes(routes(!!isLoggedIn));

  return <>{router}</>;
}

export default App;
