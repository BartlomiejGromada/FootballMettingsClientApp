import { FootballPitchForm } from "@features/FootballPitches/components/FootballPitchForm";
import { protectedPagesPathes } from "@routes/protectedPages";
import { PageLayout } from "layouts/PageLayout";

function AddFootballPitchePage() {
  return (
    <PageLayout
      title="Football pitches"
      subTitle="Add football pitch"
      backLink={protectedPagesPathes.FootballPitchesPagePath}
    >
      <FootballPitchForm />
      {/* Name - string */}
      {/* City - string */}
      {/* Street - string */}
      {/* StreetNumber - string */}
      {/* Image - byte[] */}
    </PageLayout>
  );
}

export { AddFootballPitchePage };
