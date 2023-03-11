import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Box, SxProps, Theme, Typography } from "@mui/material";

interface LogoProps {
  iconColor?: string;
  sx?: SxProps<Theme>;
}

function Logo(props: LogoProps) {
  const { iconColor, sx } = props;

  return (
    <Box component={"span"} display={"flex"} alignItems={"center"} sx={sx}>
      <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
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
