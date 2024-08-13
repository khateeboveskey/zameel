import { Label, Input } from "tamagui";
import { getAdaptiveColor } from "../lib/utils";

const FormInput = ({ id, label, secureTextEntry = false, placeholder = "" }) => (
  <>
    <Label
      mt={"$3"}
      color={getAdaptiveColor("gray", 12)}
      htmlFor={id}>
      {label}
    </Label>
    <Input
      id={id}
      secureTextEntry={secureTextEntry}
      borderColor={getAdaptiveColor("gray", 8)}
      color={getAdaptiveColor("gray", 12)}
      backgroundColor={getAdaptiveColor("gray", 5)}
      placeholderTextColor={getAdaptiveColor("gray", 8)}
      placeholder={placeholder}
    />
  </>
);

export default FormInput;
