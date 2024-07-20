import { Catalog } from "../catalog/Catalog";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  catalogs?: Array<Catalog>;
};
