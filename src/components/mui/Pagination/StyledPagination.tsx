import { Pagination } from "@customTypes/pagination";
import { TablePagination } from "@mui/material";

interface StyledPaginationProps {
  component?: string;
  paginationModel: {
    pagination: Pagination;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  };
  rowsPerPage?: number[];
  itemsCount: number;
}

export function StyledPagination(props: StyledPaginationProps) {
  const {
    component = "div",
    paginationModel,
    rowsPerPage = [10, 20, 50],
    itemsCount,
  } = props;
  const { pagination, setPagination } = paginationModel;

  return (
    <TablePagination
      component="div"
      page={pagination.page}
      rowsPerPage={pagination.pageSize}
      count={-1}
      onPageChange={(event, page) => setPagination((p) => ({ ...p, page }))}
      onRowsPerPageChange={(event) =>
        setPagination((p) => ({ ...p, pageSize: Number(event.target.value) }))
      }
      rowsPerPageOptions={rowsPerPage}
      labelDisplayedRows={() => ""}
      backIconButtonProps={{
        disabled: pagination.page == 0,
      }}
      nextIconButtonProps={{
        disabled: pagination.pageSize < itemsCount,
      }}
    />
  );
}
