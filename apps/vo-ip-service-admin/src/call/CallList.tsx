import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CallList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Calls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="startedAt" source="startedAt" />
        <TextField label="endedAt" source="endedAt" />
        <TextField label="status" source="status" />
        <TextField label="Caller" source="caller" />
        <TextField label="Receiver" source="receiver" />
      </Datagrid>
    </List>
  );
};