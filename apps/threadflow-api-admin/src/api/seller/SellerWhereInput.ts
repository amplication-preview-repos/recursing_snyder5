import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";

export type SellerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  stores?: StoreListRelationFilter;
};
