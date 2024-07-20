import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  sellerId?: SortOrder;
};
