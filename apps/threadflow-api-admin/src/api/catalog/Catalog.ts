import { Store } from "../store/Store";
import { Product } from "../product/Product";

export type Catalog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  store?: Store | null;
  product?: Product | null;
};
