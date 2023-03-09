import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
}

function PageLayout(props: PageLayoutProps) {
  const { children, title, subTitle } = props;

  const sm = useMediaQuery("(max-width:600px)");

  return (
    <Grid height="100%" paddingX={5}>
      <Grid marginTop={sm ? 8 : 0}>
        <Box display="flex" alignItems="center" height={40}>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box>
          {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
        </Box>
      </Grid>

      <Grid paddingBottom={2}>{children}</Grid>
    </Grid>
  );
}

export { PageLayout };
