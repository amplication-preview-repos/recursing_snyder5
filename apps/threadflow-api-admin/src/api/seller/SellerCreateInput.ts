import { StoreCreateNestedManyWithoutSellersInput } from "./StoreCreateNestedManyWithoutSellersInput";

export type SellerCreateInput = {
  name?: string | null;
  email?: string | null;
  stores?: StoreCreateNestedManyWithoutSellersInput;
};
