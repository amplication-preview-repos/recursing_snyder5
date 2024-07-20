import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="Sender" source="sender" />
        <TextInput label="Receiver" source="receiver" />
      </SimpleForm>
    </Edit>
  );
};
