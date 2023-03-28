import { PagedResult } from "@customTypes/pagedResult";
import { Pagination } from "@customTypes/pagination";
import { axios } from "@services/Axios";
import { AxiosError } from "axios";
import { FootballPitch } from "../types/footballPitch";
import { FootballPitchFormProps } from "../types/footballPitchFormProps";

export const getFootballPitches = async (
  pagination: Pagination,
  searchFootballPitchName: string
) => {
  const repsonse = await axios.get<PagedResult<FootballPitch>>(
    "football-pitches",
    {
      params: {
        sorts: "-CreatedAt",
        page: pagination.page,
        pageSize: pagination.pageSize,
        filters: `Name@=${searchFootballPitchName}`,
      },
    }
  );

  return repsonse.data;
};

export const getFootballPitch = async (footballPitchId: number) => {
  const repsonse = await axios.get<FootballPitch>(
    `football-pitches/${footballPitchId}`
  );

  return repsonse.data;
};

export const addFootballPitch = async (
  data: FootballPitchFormProps,
  image?: File
) => {
  try {
    let formData = new FormData();
    const properties = Object.keys(data);
    const values = Object.values(data);

    for (let i = 0; i < properties.length; i++) {
      formData.append(properties[i], values[i]);
    }

    if (image) formData.append("image", image);

    const response = await axios({
      method: "post",
      url: "football-pitches",
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

export const editFootballPitch = async (
  footballPitchId: number,
  data: FootballPitchFormProps,
  image?: File
) => {
  try {
    let formData = new FormData();
    const properties = Object.keys(data);
    const values = Object.values(data);

    for (let i = 0; i < properties.length; i++) {
      formData.append(properties[i], values[i]);
    }

    if (image) formData.append("image", image);

    const response = await axios({
      method: "put",
      url: `football-pitches/${footballPitchId}`,
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
