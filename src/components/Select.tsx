import { useState } from "react";
import { ChevronDown } from "lucide-react-native";
import { Label, Select as TamaguiSelect } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";

/**
 * Defines the props for the `Select` component.
 *
 * @param id - The unique identifier for the select component.
 * @param label - The label text to display for the select component.
 * @param placeholder - The placeholder text to display when no value is selected.
 * @param list - An array of string options to display in the select dropdown.
 * @param onValueChange - A callback function that is called when the selected value changes.
 */
type SelectProps = {
  /**
   * The unique identifier for the select component.
   */
  id: string;
  /**
   * The label text to display for the select component.
   */
  label: string;
  /**
   * The placeholder text to display when no value is selected in the select component.
   */
  placeholder: string;
  /**
   * An array of string options to display in the select dropdown.
   */
  list: string[];
  /**
   * A callback function that is called when the selected value in the `Select` component changes.
   *
   * @param value - The new selected value.
   */
  onValueChange: (value: string) => void;
};

export default function Select({
  id,
  label,
  placeholder,
  list,
  onValueChange,
  ...props
}: SelectProps) {
  const [val, setVal] = useState<string | null>(null);

  function handleChange(value: string) {
    setVal(value);
    onValueChange(value);
  }

  return (
    <>
      <Label htmlFor={`${id}-select`}>{label}</Label>
      <TamaguiSelect
        id={`${id}-select`}
        value={val}
        onValueChange={handleChange}
        defaultValue={val}
        {...props}>
        <TamaguiSelect.Trigger
          themeReset
          iconAfter={<ChevronDown color={useAdaptiveColor("neutral", 200, true)} />}>
          <TamaguiSelect.Value placeholder={placeholder}>{val}</TamaguiSelect.Value>
        </TamaguiSelect.Trigger>
        <TamaguiSelect.Content>
          <TamaguiSelect.ScrollUpButton />
          <TamaguiSelect.Viewport style={{ borderColor: useAdaptiveColor("neutral", 700, true) }}>
            {list.map((item, index) => (
              <TamaguiSelect.Item
                style={{
                  background: useAdaptiveColor("neutral", 800, true)
                }}
                // fixme: this is not working
                // hoverStyle={{
                //   backgroundColor: useAdaptiveColor("neutral", 700, true)
                // }}
                key={item}
                value={item}
                index={index}>
                {item}
              </TamaguiSelect.Item>
            ))}
          </TamaguiSelect.Viewport>
          <TamaguiSelect.ScrollDownButton />
        </TamaguiSelect.Content>
      </TamaguiSelect>
    </>
  );
}
