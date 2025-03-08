import { useEffect, useState } from "react";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Adapt, Form, Label, Select, Sheet, Spinner } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { useRequest } from "@/hooks/useRequest";

export default function Join() {
  const [val, setVal] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const neutralColor = useAdaptiveColor("neutral", 200, true);
  const neutralBorderColor = useAdaptiveColor("neutral", 700, true);
  const neutralBgColor = useAdaptiveColor("neutral", 800, true);

  const { get } = useRequest();

  useEffect(() => {
    if (drawerOpen) {
      const fetchColleges = async () => {
        setLoading(true);
        const res = await get("/colleges", false);
        if (res) setColleges(res.data);
        setLoading(false);
      };
      fetchColleges();
    }
  }, [drawerOpen]);

  return (
    <Form
      w="95%"
      mx="auto">
      <Label htmlFor="college-select">الكلية</Label>
      <Select
        id="college-select"
        value={val}
        onValueChange={setVal}
        defaultValue={val}
        onOpenChange={setDrawerOpen}>
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
                borderColor: neutralBorderColor,
                zIndex: 1000
              }}>
              <Sheet.ScrollView
                contentContainerStyle={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                {loading ? (
                  <Spinner
                    color={neutralColor}
                    size="large"
                  />
                ) : (
                  <Adapt.Contents />
                )}
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
                key={college.id}
                value={college.name}
                index={index}>
                {college.name}
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select>
    </Form>
  );
}
