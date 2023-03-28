import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFootballPitch } from "../api";
import { FootballPitch } from "../types/footballPitch";

interface useFootballPitchByIdQueryProps {
  footballPitchId?: number;
  enabled?: boolean;
}

function useFootballPitchByIdQuery(props: useFootballPitchByIdQueryProps) {
  const { footballPitchId, enabled = true } = props;

  const query = useQuery<FootballPitch>({
    queryKey: ["football-pitches", footballPitchId],
    queryFn: () => getFootballPitch(footballPitchId!),
    enabled: enabled,
  });

  return query;
}

export { useFootballPitchByIdQuery };
