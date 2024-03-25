import {
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
  SelectInput,
  Edit,
} from "react-admin";

export const ChallengeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="question" validate={[required()]} label="Question" />
      <SelectInput
        source="type"
        validate={[required()]}
        choices={[
          {
            id: "SELECT",
            name: "SELECT",
          },
          {
            id: "ASSIST",
            name: "ASSIST",
          },
        ]}
      />
      <ReferenceInput source="lessonId" reference="lessons" />
      <NumberInput source="order" validate={[required()]} label="Order" />
    </SimpleForm>
  </Edit>
);
