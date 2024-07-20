import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CatalogUpdateInput = {
  store?: StoreWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
