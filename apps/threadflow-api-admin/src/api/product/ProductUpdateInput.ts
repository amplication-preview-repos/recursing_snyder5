import { CatalogUpdateManyWithoutProductsInput } from "./CatalogUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  catalogs?: CatalogUpdateManyWithoutProductsInput;
};
