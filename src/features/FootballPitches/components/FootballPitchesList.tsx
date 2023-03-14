import { StyledPagination } from "@components/mui";
import { InfoOutlined } from "@mui/icons-material";
import {
  CircularProgress,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useFootballPitchesQuery } from "../hooks/useFootballPitchesQuery";

export function FootballPitchesList() {
  const lg = useMediaQuery("(min-width:1200px)");
  const md = useMediaQuery("(min-width:900px)");

  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 5,
  });

  const { data, isFetching, isError } = useFootballPitchesQuery(pagination);

  if (isFetching) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginTop={10}
      >
        <CircularProgress size="50px" />
      </Grid>
    );
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <>
      <ImageList
        cols={lg ? 4 : md ? 3 : 2}
        rowHeight={200}
        gap={20}
        variant="quilted"
      >
        <>
          {data?.items?.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={
                  item.image
                    ? `data:image/jpeg;base64,${item.image}`
                    : "assets/DefaultFootballPitchImage.jpg"
                }
                alt={item.name}
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: 4 }}
              />
              <ImageListItemBar
                title={item.name}
                subtitle={`${item.city}`}
                sx={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                }}
                actionIcon={
                  <Tooltip
                    title={`${item.city}, ${item.street} ${item.streetNumber}`}
                  >
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.name}`}
                    >
                      <InfoOutlined />
                    </IconButton>
                  </Tooltip>
                }
              />
            </ImageListItem>
          ))}
        </>
      </ImageList>

      <Grid container justifyContent="flex-end">
        <StyledPagination
          paginationModel={{
            pagination,
            setPagination,
          }}
          rowsPerPage={[5, 10, 20]}
          itemsCount={data?.items.length ?? 0}
        />
      </Grid>
    </>
  );
}
