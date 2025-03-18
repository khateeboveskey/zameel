import { useState } from "react";
import { ScrollView } from "tamagui";

import { FormInput, Logo } from "@/components";

export default function TabHome() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ScrollView padding="$4">
      <Logo
        style={{
          margin: "auto"
        }}
        width={"30%"}
      />
      <FormInput
        noValidate
        id="search"
        label=""
        style={{
          marginTop: 20
        }}
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
        placeholder="ابحث..."
        value={searchTerm}
      />
    </ScrollView>
  );
}
