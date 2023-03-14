import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  backLink?: string;
  actions?: React.ReactNode;
}

function PageLayout(props: PageLayoutProps) {
  const { children, title, subTitle, backLink, actions } = props;

  const mediaSm = useMediaQuery("(max-width:900px)");

  // {backButton && (
  //   <IconButton>
  //     <ArrowBackIosIcon />
  //   </IconButton>
  // )}

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="stretch"
      height="100%"
      paddingX={2}
      spacing={4}
    >
      <Grid item marginTop={mediaSm ? 8 : 0} padding={2}>
        <Grid container flexDirection="row" alignItems="center" spacing={2}>
          {backLink && (
            <Grid item>
              <Link to={backLink}>
                <IconButton>
                  <ArrowBackIosIcon />
                </IconButton>
              </Link>
            </Grid>
          )}

          <Grid item>
            {subTitle && (
              <Typography variant="subtitle1">{subTitle}</Typography>
            )}
            <Typography variant="h1">{title}</Typography>
          </Grid>

          <Grid item flex="1"></Grid>
          {actions && (
            <Grid item justifySelf="flex-end">
              {actions}
            </Grid>
          )}
        </Grid>

        <Grid item flex="1" paddingTop={2}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

export { PageLayout };
