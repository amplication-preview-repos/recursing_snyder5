import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { CatalogListRelationFilter } from "../catalog/CatalogListRelationFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  seller?: SellerWhereUniqueInput;
  catalogs?: CatalogListRelationFilter;
};
