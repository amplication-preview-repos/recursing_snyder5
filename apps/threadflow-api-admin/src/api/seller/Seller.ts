import { Store } from "../store/Store";

export type Seller = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  stores?: Array<Store>;
};
