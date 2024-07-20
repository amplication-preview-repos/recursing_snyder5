import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CallWhereInput = {
  id?: StringFilter;
  startedAt?: DateTimeNullableFilter;
  endedAt?: DateTimeNullableFilter;
  status?: "Option1";
  caller?: StringNullableFilter;
  receiver?: StringNullableFilter;
};
