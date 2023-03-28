import { SearchTextField } from "@components/ui/SearchTextField/SearchTextField";
import { FootballPitchesList } from "@features/FootballPitches";
import { useDebounce } from "@hooks/useDebounce";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { protectedPagesPathes } from "@routes/protectedPages";
import { PageLayout } from "layouts/PageLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FootballPitchesPage() {
  const navigate = useNavigate();

  const [searchFootballPitchName, setSearchFootballPitchName] = useState("");
  const debounceSearchValue = useDebounce(searchFootballPitchName, 2000);

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
      <SearchTextField
        value={searchFootballPitchName}
        setValue={setSearchFootballPitchName}
      />
      <FootballPitchesList searchFootballPitchName={debounceSearchValue} />
    </PageLayout>
  );
}

export { FootballPitchesPage };
