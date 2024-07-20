import { Call as TCall } from "../api/call/Call";

export const CALL_TITLE_FIELD = "caller";

export const CallTitle = (record: TCall): string => {
  return record.caller?.toString() || String(record.id);
};
