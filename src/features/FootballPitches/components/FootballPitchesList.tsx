import DefaultFootballPitchImage from "@assets/DefaultFootballPitchImage.jpg";
import { StyledPagination } from "@components/mui";
import { FetchGetParams } from "@customTypes/fetchGetParams";
import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  TablePagination,
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
    return <CircularProgress />;
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
                    : DefaultFootballPitchImage
                }
                alt={item.name}
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <ImageListItemBar
                title={item.name}
                subtitle={`${item.city}`}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.name}`}
                  >
                    <InfoOutlined />
                  </IconButton>
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
