import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "nickname";

export const ContactTitle = (record: TContact): string => {
  return record.nickname?.toString() || String(record.id);
};
