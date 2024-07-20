import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nickname?: SortOrder;
  userId?: SortOrder;
  contactId?: SortOrder;
};
