export interface PagedResult<T> {
  items: T[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
