import { Seller } from "../seller/Seller";
import { Catalog } from "../catalog/Catalog";

export type Store = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  seller?: Seller | null;
  catalogs?: Array<Catalog>;
};
