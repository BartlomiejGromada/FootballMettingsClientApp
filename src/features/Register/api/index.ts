import axios from "@services/axios";
import { AxiosError } from "axios";
import { RegisterUserFormProps } from "../types/RegisterUserFormProps";

const registerUser = async (data: RegisterUserFormProps) => {
  try {
    await axios.post("account/register", data);
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error("Axios error", err);
    } else {
      console.error("Error", err);
    }
  }
};

export { registerUser };
