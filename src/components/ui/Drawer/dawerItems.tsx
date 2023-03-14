import GrassIcon from "@mui/icons-material/Grass";
import InfoIcon from "@mui/icons-material/Info";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { protectedPagesPathes } from "../../../routes/protectedPages";

export interface DawerItemsProps {
  name: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export const dawerItems: DawerItemsProps[] = [
  {
    name: "Football pitches",
    path: protectedPagesPathes.FootballPitchesPagePath,
    icon: GrassIcon,
  },
  {
    name: "Football matches",
    path: protectedPagesPathes.FootballMatchesPagePath,
    icon: SportsSoccerIcon,
  },
  {
    name: "About",
    path: protectedPagesPathes.AboutPagePath,
    icon: InfoIcon,
  },
];
