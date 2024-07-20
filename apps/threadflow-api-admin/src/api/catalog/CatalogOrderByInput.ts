import { SortOrder } from "../../util/SortOrder";

export type CatalogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  storeId?: SortOrder;
  productId?: SortOrder;
};
