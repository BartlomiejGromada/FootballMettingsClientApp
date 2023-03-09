import { FetchGetParams } from "@customTypes/fetchGetParams";
import { PagedResult } from "@customTypes/pagedResult";
import { axios } from "@services/Axios";
import { FootballPitch } from "../types";

export const getFootballPitches = async (params: FetchGetParams) => {
  const repsonse = await axios.get<PagedResult<FootballPitch>>(
    "football-pitches",
    {
      params: params,
    }
  );

  return repsonse.data;
};
