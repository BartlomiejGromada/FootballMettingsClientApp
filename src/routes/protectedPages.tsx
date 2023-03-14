import { AddFootballPitchePage } from "@pages/FootballPitches/AddFootballPitchPage";
import { FootballPitchesPage } from "@pages/FootballPitches/FootballPitchesPage";

interface ProtectedPage {
  path: string;
  element: React.ReactNode;
  children?: ProtectedPage[];
}

export const protectedPagesPathes = {
  FootballPitchesPagePath: "/football-pitches",
  AddFootballPitchPagePath: "/football-pitches/add",
  FootballMatchesPagePath: "/football-matches",
  AboutPagePath: "/about",
};

export const protectedPages: ProtectedPage[] = [
  {
    path: protectedPagesPathes.FootballPitchesPagePath,
    element: <FootballPitchesPage />,
  },
  {
    path: protectedPagesPathes.AddFootballPitchPagePath,
    element: <AddFootballPitchePage />,
  },
  {
    path: protectedPagesPathes.FootballMatchesPagePath,
    element: <div>Football matches</div>,
  },
  {
    path: protectedPagesPathes.AboutPagePath,
    element: <div>About page</div>,
  },
];
