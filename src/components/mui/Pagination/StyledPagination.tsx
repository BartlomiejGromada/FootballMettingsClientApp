import { Pagination } from "@customTypes/pagination";
import { TablePagination } from "@mui/material";

interface StyledPaginationProps {
  paginationModel: {
    pagination: Pagination;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  };
  rowsPerPage?: number[];
  itemsCount: number;
}

export function StyledPagination(props: StyledPaginationProps) {
  const { paginationModel, rowsPerPage = [10, 20, 50], itemsCount } = props;
  const { pagination, setPagination } = paginationModel;

  return (
    <TablePagination
      component="div"
      page={pagination.page}
      rowsPerPage={pagination.pageSize}
      count={-1}
      onPageChange={(event, page) => setPagination((p) => ({ ...p, page }))}
      onRowsPerPageChange={(event) =>
        setPagination({ page: 0, pageSize: Number(event.target.value) })
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
