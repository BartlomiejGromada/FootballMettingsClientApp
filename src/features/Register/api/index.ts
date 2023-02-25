import { axios } from "@services/Axios";
import { AxiosError } from "axios";
import { RegisterUserFormProps } from "../types/RegisterUserFormProps";

const registerUser = async (data: RegisterUserFormProps) => {
  try {
    const response = await axios.post("account/register", data);
    return response;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error("Axios error", err);

      if (err.response?.status === 400) {
        let responseErrors = "";
        for (const [, value] of Object.entries(err?.response?.data)) {
          responseErrors += `${value}\n`;
        }
        throw new Error(responseErrors);
      }

      throw new Error("Something went wrong!");
    } else {
      console.error("Error", err);

      throw new Error("Something went wrong!");
    }
  }
};

export { registerUser };
