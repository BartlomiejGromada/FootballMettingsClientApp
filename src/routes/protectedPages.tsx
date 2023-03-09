import GrassIcon from "@mui/icons-material/Grass";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import InfoIcon from "@mui/icons-material/Info";
import { FootballPitchesPage } from "@pages/FootballPitchesPage";

interface ProtectedPage {
  name: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  element: JSX.Element;
  children?: ProtectedPage[];
}

export const protectedPagesPathes = {
  FootballPitchesPagePath: "/football-pitches",
  FootballMatchesPagePath: "/football-matches",
  AboutPagePath: "/about",
};

export const protectedPages: ProtectedPage[] = [
  {
    name: "Football pitches",
    path: protectedPagesPathes.FootballPitchesPagePath,
    icon: GrassIcon,
    element: <FootballPitchesPage />,
  },
  {
    name: "Football matches",
    path: protectedPagesPathes.FootballMatchesPagePath,
    icon: SportsSoccerIcon,
    element: <div>Football matches</div>,
  },
  {
    name: "About",
    path: protectedPagesPathes.AboutPagePath,
    icon: InfoIcon,
    element: <div>About</div>,
  },
];
