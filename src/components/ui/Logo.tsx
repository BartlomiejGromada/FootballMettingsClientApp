import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Box, Grid, Typography } from "@mui/material";

interface LogoProps {
  iconColor?: string;
}

function Logo(props: LogoProps) {
  const { iconColor } = props;

  return (
    <Box component={"span"} display={"flex"} alignItems={"center"}>
      <Typography variant={"h5"} fontWeight={"bold"}>
        Football Meetings
      </Typography>
      <SportsSoccerIcon
        fontSize={"large"}
        sx={{ color: iconColor ?? "primary.main" }}
      />
    </Box>
  );
}

export { Logo };
