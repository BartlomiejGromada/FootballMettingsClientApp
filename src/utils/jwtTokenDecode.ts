import { JwtToken } from "@customTypes/jwtToken";
import { LocalStorage } from "@services/LocalStorage";
import jwt_decode from "jwt-decode";

export function jwtTokenDecode() {
  const token = LocalStorage.get<string>("jwtToken");

  if (token) {
    const decodedToken: JwtToken = jwt_decode(token);
    const user = {
      id: decodedToken.id,
      name: decodedToken.name,
      email: decodedToken.email,
      birthdate: decodedToken.birthdate,
      nickname: decodedToken.nickname,
      role: decodedToken.role,
    };

    return user;
  }

  return null;
}
