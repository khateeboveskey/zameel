import { Form } from "tamagui";

import DynamicSelect from "@/components/DynamicSelect";

export default function Join() {
  return (
    <Form
      w="95%"
      mx="auto">
      <DynamicSelect
        label="الكلية"
        placeholder="قم باختيار الكلية"
        endpoint="/colleges"
        dataKey="data"
        valueKey="id"
        labelKey="name"
        onValueChange={(value) => console.log(value)}
      />
      <DynamicSelect
        label="التخصص"
        placeholder="قم باختيار التخصص"
        endpoint="/majors"
        dataKey="data"
        valueKey="id"
        labelKey="name"
        onValueChange={(value) => console.log(value)}
      />
    </Form>
  );
}
