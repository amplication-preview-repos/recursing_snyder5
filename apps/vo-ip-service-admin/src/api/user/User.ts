import { JsonValue } from "type-fest";
import { Contact } from "../contact/Contact";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  contacts?: Array<Contact>;
};
