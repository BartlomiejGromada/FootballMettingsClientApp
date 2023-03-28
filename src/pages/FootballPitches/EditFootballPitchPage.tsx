import {
  FootballPitchForm,
  useFootballPitchByIdQuery,
} from "@features/FootballPitches";
import { CircularProgress, Grid } from "@mui/material";
import { protectedPagesPathes } from "@routes/protectedPages";
import { PageLayout } from "layouts/PageLayout";
import { useLocation } from "react-router-dom";

function EditFootballPitchPage() {
  const { state } = useLocation();
  const { id: footballPitchId } = state;

  const { data, isFetching, isSuccess, isError } = useFootballPitchByIdQuery({
    footballPitchId: footballPitchId,
    enabled: footballPitchId != undefined,
  });

  return (
    <PageLayout
      title="Edit football pitch"
      subTitle="Football pitches"
      backLink={protectedPagesPathes.FootballPitchesPagePath}
    >
      {isFetching && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={10}
        >
          <CircularProgress size="50px" />
        </Grid>
      )}

      {isSuccess && <FootballPitchForm footballPitch={data} />}
    </PageLayout>
  );
}

export { EditFootballPitchPage };
