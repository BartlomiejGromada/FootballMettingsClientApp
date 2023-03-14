import { FootballPitchesList } from "@features/FootballPitches";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { protectedPagesPathes } from "@routes/protectedPages";
import { PageLayout } from "layouts/PageLayout";
import { useNavigate } from "react-router-dom";

function FootballPitchesPage() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="List of football pitches"
      subTitle="Football pitches"
      actions={
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          color="secondary"
          onClick={() => {
            navigate(protectedPagesPathes.AddFootballPitchPagePath);
          }}
        >
          Add football pitch
        </Button>
      }
    >
      <FootballPitchesList />
    </PageLayout>
  );
}

export { FootballPitchesPage };
