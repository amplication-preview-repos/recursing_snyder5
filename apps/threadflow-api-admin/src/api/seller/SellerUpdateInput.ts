import { StoreUpdateManyWithoutSellersInput } from "./StoreUpdateManyWithoutSellersInput";

export type SellerUpdateInput = {
  name?: string | null;
  email?: string | null;
  stores?: StoreUpdateManyWithoutSellersInput;
};
