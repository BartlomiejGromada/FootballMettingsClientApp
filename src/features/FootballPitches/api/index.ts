import { FetchGetParams } from "@customTypes/fetchGetParams";
import { PagedResult } from "@customTypes/pagedResult";
import { Pagination } from "@customTypes/pagination";
import { axios } from "@services/Axios";
import { FootballPitch } from "../types/footballPitch";
import { FootballPitchFormProps } from "../types/footballPitchFormProps";
import { AxiosError } from "axios";

export const getFootballPitches = async (pagination: Pagination) => {
  const repsonse = await axios.get<PagedResult<FootballPitch>>(
    "football-pitches",
    {
      params: pagination,
    }
  );

  return repsonse.data;
};

export const addFootballPitch = async (formData: FormData) => {
  try {
    const response = await axios({
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
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
