import { useEffect, useState } from "react";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Adapt, Label, Select, Sheet, Spinner } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { useRequest } from "@/hooks/useRequest";

interface DynamicSelectProps {
  label: string;
  placeholder: string;
  endpoint: string;
  dataKey: string;
  valueKey: string;
  labelKey: string;
  onValueChange: (value) => void;
}

export default function DynamicSelect({
  label,
  placeholder,
  endpoint,
  dataKey,
  valueKey,
  labelKey,
  onValueChange
}: DynamicSelectProps) {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
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
        const res = await get(endpoint, false);
        if (res) setItems(res.data);
        setLoading(false);
      };
      fetchColleges();
    }
  }, [drawerOpen, endpoint, dataKey]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <>
      <Label
        style={{ marginTop: 15 }}
        htmlFor={`${label}-select`}>
        {label}
      </Label>
      <Select
        id={`${label}-select`}
        value={value}
        onValueChange={handleValueChange}
        defaultValue={value}
        onOpenChange={setDrawerOpen}>
        <Select.Trigger
          style={{ backgroundColor: neutralBgColor, borderColor: neutralBorderColor }}
          iconAfter={
            <ChevronDown
              size={24}
              color={neutralColor}
            />
          }>
          <Select.Value placeholder={placeholder}>{value}</Select.Value>
        </Select.Trigger>

        <Adapt
          when="sm"
          platform="touch">
          <Sheet
            snapPoints={[50]}
            modal
            dismissOnSnapToBottom>
            <Sheet.Frame
              style={{
                backgroundColor: neutralBgColor,
                borderColor: neutralBorderColor,
                zIndex: 1000
              }}>
              <Sheet.ScrollView>
                {loading ? (
                  <Spinner
                    color={neutralColor}
                    size="large"
                    style={{ alignSelf: "center", marginTop: 20 }}
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
            {items.map((item, index) => (
              <Select.Item
                style={{
                  backgroundColor: neutralBgColor,
                  borderColor: neutralBorderColor,
                  direction: "rtl"
                }}
                key={item[valueKey]}
                value={item[labelKey]}
                index={index}>
                {item[labelKey]}
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select>
    </>
  );
}
