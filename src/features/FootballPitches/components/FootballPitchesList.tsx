import { FetchGetParams } from "@customTypes/fetchGetParams";
import { InfoOutlined } from "@mui/icons-material";
import {
  CircularProgress,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useFootballPitchesQuery } from "../hooks/useFootballPitchesQuery";
import DefaultFootballPitchImage from "@assets/DefaultFootballPitchImage.jpg";
import { PageLayout } from "@components/layouts/PageLayout";

export function FootballPitchesList() {
  const [fetchParams, setFetchParams] = useState<FetchGetParams>({
    filters: "",
    sorts: "",
    pageSize: 10,
    page: 1,
  });
  const { data, isFetching, isError } = useFootballPitchesQuery(fetchParams);

  const lg = useMediaQuery("(min-width:1200px)");
  const md = useMediaQuery("(min-width:900px)");

  if (isFetching) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <PageLayout title="Football pitches" subTitle="List of football pitches">
      <ImageList
        cols={lg ? 4 : md ? 3 : 2}
        rowHeight={200}
        gap={20}
        variant="standard"
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
                subtitle={`${item.city}, ${item.street} ${item.streetNumber}`}
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

      <Pagination
        count={data?.totalItemsCount}
        page={fetchParams.page}
        variant="outlined"
      />
    </PageLayout>
  );
}
