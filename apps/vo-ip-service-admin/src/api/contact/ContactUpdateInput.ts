import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ContactUpdateManyWithoutContactsInput } from "./ContactUpdateManyWithoutContactsInput";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";

export type ContactUpdateInput = {
  nickname?: string | null;
  user?: UserWhereUniqueInput | null;
  contacts?: ContactUpdateManyWithoutContactsInput;
  contact?: ContactWhereUniqueInput | null;
};
