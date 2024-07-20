import { CatalogCreateNestedManyWithoutProductsInput } from "./CatalogCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  catalogs?: CatalogCreateNestedManyWithoutProductsInput;
};
