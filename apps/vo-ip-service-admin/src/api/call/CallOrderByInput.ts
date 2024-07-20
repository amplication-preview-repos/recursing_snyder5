import { SortOrder } from "../../util/SortOrder";

export type CallOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startedAt?: SortOrder;
  endedAt?: SortOrder;
  status?: SortOrder;
  caller?: SortOrder;
  receiver?: SortOrder;
};
