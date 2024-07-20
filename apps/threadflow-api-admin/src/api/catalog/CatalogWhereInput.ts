import { StringFilter } from "../../util/StringFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CatalogWhereInput = {
  id?: StringFilter;
  store?: StoreWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
