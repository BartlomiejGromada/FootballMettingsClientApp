import { TokenJWT } from "@customTypes/TokenJWT";
import { routes } from "@routes/routes";
import { LocalStorage } from "@services/LocalStorage";
import jwt_decode from "jwt-decode";
import { useRoutes } from "react-router-dom";

function App() {
  const isLoggedIn = isJwtTokenValid();

  const router = useRoutes(routes(isLoggedIn));

  return <>{router}</>;
}

const isJwtTokenValid = () => {
  const token = LocalStorage.get<string>("token");
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJFbWFpbCI6ImJhcnRsb21pZWpncm9tYWRhOTdAZ21haWwuY29tIiwiTmFtZSI6IkJhcnTFgm9taWVqIEdyb21hZGEiLCJSb2xlIjoiQWRtaW4iLCJOaWNrbmFtZSI6IkJhcnR1bGEiLCJiaXJ0aGRhdGUiOiIyMDIyLTAxLTE4IiwibmJmIjoxNjc2OTk5MDUyLCJleHAiOjE2Nzc2MDM4NTIsImlzcyI6Imh0dHA6Ly9mb290YmFsbC1tZWV0aW5ncy1hcGkuY29tIiwiYXVkIjoiaHR0cDovL2Zvb3RiYWxsLW1lZXRpbmdzLWFwaS5jb20ifQ.tpjVOo7hrPUedyep7V1EpWUXTo0K8n3gLGa4oiQBJcM";
  if (token) {
    const decodedToken: TokenJWT = jwt_decode(token);
    const expDate = convertTimestampToDate(decodedToken.exp);
    console.log("decodedToken", decodedToken);

    if (expDate >= new Date()) return true;
  }

  return false;
};

const convertTimestampToDate = (timestamp: number) => {
  return new Date(timestamp * 1000);
};

export default App;
