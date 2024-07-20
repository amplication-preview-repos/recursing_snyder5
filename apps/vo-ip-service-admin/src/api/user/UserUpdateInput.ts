import { InputJsonValue } from "../../types";
import { ContactUpdateManyWithoutUsersInput } from "./ContactUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  contacts?: ContactUpdateManyWithoutUsersInput;
};
