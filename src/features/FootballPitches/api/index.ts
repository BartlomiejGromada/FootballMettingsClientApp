import { FetchGetParams } from "@customTypes/fetchGetParams";
import { PagedResult } from "@customTypes/pagedResult";
import { Pagination } from "@customTypes/pagination";
import { axios } from "@services/Axios";
import { FootballPitch } from "../types";

export const getFootballPitches = async (pagination: Pagination) => {
  const repsonse = await axios.get<PagedResult<FootballPitch>>(
    "football-pitches",
    {
      params: pagination,
    }
  );

  return repsonse.data;
};
