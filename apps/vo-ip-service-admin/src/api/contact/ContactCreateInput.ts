import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ContactCreateNestedManyWithoutContactsInput } from "./ContactCreateNestedManyWithoutContactsInput";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";

export type ContactCreateInput = {
  nickname?: string | null;
  user?: UserWhereUniqueInput | null;
  contacts?: ContactCreateNestedManyWithoutContactsInput;
  contact?: ContactWhereUniqueInput | null;
};
