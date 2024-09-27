import { useState } from "react";
import { ChevronDown } from "lucide-react-native";
import { Adapt, Form, Label, Select, Sheet } from "tamagui";

import { useAdaptiveColor } from "@/hooks";

export default function join() {
  const [val, setVal] = useState(null);

  return (
    <Form w="100%">
      <Label htmlFor="college-select">الكلية</Label>
      <Select
        id="college-select"
        value={val}
        onValueChange={setVal}
        defaultValue={val}>
        <Select.Trigger
          themeReset
          iconAfter={<ChevronDown color={useAdaptiveColor("neutral", 200, true)} />}>
          <Select.Value placeholder={"قم باختيار الكلية"}>{val}</Select.Value>
        </Select.Trigger>

        <Adapt
          when="sm"
          platform="touch">
          <Sheet
            // native={!!props.native}
            modal
            dismissOnSnapToBottom>
            <Sheet.Frame>
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
          <Select.Viewport style={{ borderColor: useAdaptiveColor("neutral", 700, true) }}>
            {colleges.map((college, index) => (
              <Select.Item
                style={{
                  background: useAdaptiveColor("neutral", 800, true)
                }}
                // fixme: this is not working
                // hoverStyle={{
                //   backgroundColor: useAdaptiveColor("neutral", 700, true)
                // }}
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
