import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Box, Grid, Typography } from "@mui/material";

function Logo() {
  return (
    <Box component={"span"} display={"flex"} alignItems={"center"}>
      <Typography variant={"h5"} fontWeight={"bold"}>
        Football Meetings
      </Typography>
      <SportsSoccerIcon fontSize={"large"} color={"primary"} />
    </Box>
  );
}

export { Logo };
