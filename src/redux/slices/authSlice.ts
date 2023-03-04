import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorage } from "@services/LocalStorage";
import { jwtTokenDecode } from "../../utils/jwtTokenDecode";
import { User } from "@customTypes/user";

interface AuthState {
  user: User | null;
  jwtToken: string | null;
}

const initJwtToken = () => {
  const token = LocalStorage.get<string>("jwtToken");
  return token ?? null;
};

const initialState: AuthState = {
  user: jwtTokenDecode(),
  jwtToken: initJwtToken(),
};

export const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    logout: (state) => {
      state.jwtToken = null;
      LocalStorage.remove("jwtToken");

      state.user = null;
    },
    login: (state, action: PayloadAction<string>) => {
      state.jwtToken = action.payload;
      LocalStorage.set("jwtToken", state.jwtToken);

      state.user = jwtTokenDecode();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
