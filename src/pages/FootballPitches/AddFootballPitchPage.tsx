import { FootballPitchForm } from "@features/FootballPitches";
import { protectedPagesPathes } from "@routes/protectedPages";
import { PageLayout } from "layouts/PageLayout";

function AddFootballPitchePage() {
  return (
    <PageLayout
      title="Add football pitch"
      subTitle="Football pitches"
      backLink={protectedPagesPathes.FootballPitchesPagePath}
    >
      <FootballPitchForm />
    </PageLayout>
  );
}

export { AddFootballPitchePage };
