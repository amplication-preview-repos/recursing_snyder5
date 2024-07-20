import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ContactListRelationFilter } from "./ContactListRelationFilter";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";

export type ContactWhereInput = {
  id?: StringFilter;
  nickname?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  contacts?: ContactListRelationFilter;
  contact?: ContactWhereUniqueInput;
};
