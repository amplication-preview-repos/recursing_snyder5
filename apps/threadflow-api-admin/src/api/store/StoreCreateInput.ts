import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { CatalogCreateNestedManyWithoutStoresInput } from "./CatalogCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  name?: string | null;
  seller?: SellerWhereUniqueInput | null;
  catalogs?: CatalogCreateNestedManyWithoutStoresInput;
};
