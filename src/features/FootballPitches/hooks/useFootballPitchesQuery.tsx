import { FetchGetParams } from "@customTypes/fetchGetParams";
import { PagedResult } from "@customTypes/pagedResult";
import { useQuery } from "@tanstack/react-query";
import { getFootballPitches } from "../api";
import { FootballPitch } from "../types";

function useFootballPitchesQuery(params: FetchGetParams) {
  const query = useQuery<PagedResult<FootballPitch>>({
    queryKey: [
      "football-pitches",
      {
        filters: params.filters,
        sorts: params.sorts,
        page: params.page,
        pageSize: params.pageSize,
      },
    ],
    queryFn: () => getFootballPitches(params),
  });

  return query;
}

export { useFootballPitchesQuery };
