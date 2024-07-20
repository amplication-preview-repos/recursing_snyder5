import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CallShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="startedAt" source="startedAt" />
        <TextField label="endedAt" source="endedAt" />
        <TextField label="status" source="status" />
        <TextField label="Caller" source="caller" />
        <TextField label="Receiver" source="receiver" />
      </SimpleShowLayout>
    </Show>
  );
};
