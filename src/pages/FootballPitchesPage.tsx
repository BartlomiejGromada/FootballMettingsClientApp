import { PageLayout } from "layouts/PageLayout";
import { FootballPitchesList } from "@features/FootballPitches";

function FootballPitchesPage() {
  return (
    <PageLayout title="Football pitches" subTitle="List of football pitches">
      <FootballPitchesList />
    </PageLayout>
  );
}

export { FootballPitchesPage };
