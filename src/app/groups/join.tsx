import { useState } from "react";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Adapt, Form, Label, Select, Sheet } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";

export default function Join() {
  const [val, setVal] = useState(null);
  const neutralColor = useAdaptiveColor("neutral", 200, true);
  const neutralBorderColor = useAdaptiveColor("neutral", 700, true);
  const neutralBgColor = useAdaptiveColor("neutral", 800, true);

  return (
    <Form w="100%">
      <Label htmlFor="college-select">الكلية</Label>
      <Select
        id="college-select"
        value={val}
        onValueChange={setVal}
        defaultValue={val}>
        <Select.Trigger
          style={{ backgroundColor: neutralBgColor, borderColor: neutralBorderColor }}
          iconAfter={
            <ChevronDown
              size={24}
              color={neutralColor}
            />
          }>
          <Select.Value placeholder={"قم باختيار الكلية"}>{val}</Select.Value>
        </Select.Trigger>

        <Adapt
          when="sm"
          platform="touch">
          <Sheet
            snapPoints={[6 * colleges.length]}
            modal
            dismissOnSnapToBottom>
            <Sheet.Frame
              style={{
                backgroundColor: neutralBgColor,
                borderColor: neutralBorderColor
              }}>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {colleges.map((college, index) => (
              <Select.Item
                style={{ backgroundColor: neutralBgColor, borderColor: neutralBorderColor }}
                key={college}
                value={college}
                index={index}>
                {college}
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select>
    </Form>
  );
}

const colleges = ["الهندسة والحاسبات", "العلوم الإدارية والإنسانية", "الطب والعلوم الصحية"];
