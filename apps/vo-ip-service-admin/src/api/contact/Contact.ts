import { User } from "../user/User";

export type Contact = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nickname: string | null;
  user?: User | null;
  contacts?: Array<Contact>;
  contact?: Contact | null;
};
