import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { CatalogUpdateManyWithoutStoresInput } from "./CatalogUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  name?: string | null;
  seller?: SellerWhereUniqueInput | null;
  catalogs?: CatalogUpdateManyWithoutStoresInput;
};
