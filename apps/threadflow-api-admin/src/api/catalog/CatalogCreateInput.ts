import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CatalogCreateInput = {
  store?: StoreWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
