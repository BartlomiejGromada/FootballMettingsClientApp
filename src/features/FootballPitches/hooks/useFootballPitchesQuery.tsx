import { FetchGetParams } from "@customTypes/fetchGetParams";
import { PagedResult } from "@customTypes/pagedResult";
import { Pagination } from "@customTypes/pagination";
import { useQuery } from "@tanstack/react-query";
import { getFootballPitches } from "../api";
import { FootballPitch } from "../types/footballPitch";

function useFootballPitchesQuery(pagination: Pagination) {
  const query = useQuery<PagedResult<FootballPitch>>({
    queryKey: [
      "football-pitches",
      {
        page: pagination.page + 1,
        pageSize: pagination.pageSize,
      },
    ],
    queryFn: () =>
      getFootballPitches({
        ...pagination,
        page: pagination.page + 1,
      }),
  });

  return query;
}

export { useFootballPitchesQuery };
