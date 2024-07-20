import { InputJsonValue } from "../../types";
import { ContactCreateNestedManyWithoutUsersInput } from "./ContactCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  contacts?: ContactCreateNestedManyWithoutUsersInput;
};
