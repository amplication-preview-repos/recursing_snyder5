import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const CallEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="startedAt" source="startedAt" />
        <DateTimeInput label="endedAt" source="endedAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Caller" source="caller" />
        <TextInput label="Receiver" source="receiver" />
      </SimpleForm>
    </Edit>
  );
};
