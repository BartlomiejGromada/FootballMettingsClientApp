import { StyledPagination } from "@components/mui";
import { IconButtonWithTooltip } from "@components/ui";
import { InfoOutlined } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import {
  CircularProgress,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import { protectedPagesPathes } from "@routes/protectedPages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFootballPitchesQuery } from "../hooks/useFootballPitchesQuery";

interface FootballPitchesListProps {
  searchFootballPitchName: string;
}

export function FootballPitchesList(props: FootballPitchesListProps) {
  const { searchFootballPitchName } = props;

  const lg = useMediaQuery("(min-width:1200px)");
  const md = useMediaQuery("(min-width:900px)");

  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 5,
  });

  const { data, isFetching, isError } = useFootballPitchesQuery(
    pagination,
    searchFootballPitchName
  );

  const navigate = useNavigate();

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
                title={
                  item.name.length <= 20
                    ? item.name
                    : `${item.name.slice(0, 18)}...`
                }
                subtitle={`${item.city}`}
                sx={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                }}
                actionIcon={
                  <>
                    <IconButtonWithTooltip
                      text={`${item.name} - [${item.city}, ${
                        item.street ?? ""
                      } ${item.streetNumber ?? ""}]`}
                      icon={InfoOutlined}
                    />
                    <IconButtonWithTooltip
                      text="Edit"
                      icon={EditIcon}
                      onClick={() => {
                        navigate(
                          protectedPagesPathes.EditFootballPitchPagePath.replace(
                            ":id",
                            item.id.toString()
                          ),
                          { state: { id: item.id } }
                        );
                      }}
                    />
                  </>
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
