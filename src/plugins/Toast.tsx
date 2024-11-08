// App.jsx
import RNToast, { ErrorToast, InfoToast, SuccessToast } from "react-native-toast-message";
import { CircleCheck, CircleX, Info, Square } from "lucide-react-native";

import { useAdaptiveColor } from "@/hooks";

export function Toast() {
  const commonStyles = {
    style: {
      backgroundColor: useAdaptiveColor("neutral", 800, true)
    },
    contentContainerStyle: { paddingHorizontal: 15 },
    text1Style: {
      fontSize: 15,
      fontWeight: "400",
      fontFamily: "Alexandria",
      color: useAdaptiveColor("neutral", 50, true)
    },
    text2Style: {
      fontSize: 10,
      fontWeight: "400",
      fontFamily: "Alexandria",
      color: useAdaptiveColor("neutral", 50, true),
      opacity: 0.5
    }
  };

  const toastConfig = {
    success: (props) => (
      <SuccessToast
        {...props}
        {...commonStyles}
        style={{
          ...commonStyles.style,
          borderLeftColor: "#16a34a"
        }}
        renderLeadingIcon={() => (
          <CircleCheck
            size={30}
            style={{
              marginLeft: 15,
              marginVertical: "auto"
            }}
            color={"#16a34a"}
          />
        )}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        {...commonStyles}
        style={{
          ...commonStyles.style,
          borderLeftColor: "#dc2626"
        }}
        renderLeadingIcon={() => (
          <CircleX
            size={30}
            style={{
              marginLeft: 15,
              marginVertical: "auto"
            }}
            color={"#dc2626"}
          />
        )}
      />
    ),
    info: (props) => (
      <InfoToast
        {...props}
        {...commonStyles}
        style={{
          ...commonStyles.style,
          borderLeftColor: "#2563eb"
        }}
        renderLeadingIcon={() => (
          <Info
            size={30}
            style={{
              marginLeft: 15,
              marginVertical: "auto"
            }}
            color={"#2563eb"}
          />
        )}
      />
    ),
    zameel: (props) => (
      <InfoToast
        {...props}
        {...commonStyles}
        style={{
          ...commonStyles.style,
          borderLeftColor: "#6366f1"
        }}
        renderLeadingIcon={() => (
          <Square
            size={30}
            style={{
              marginLeft: 15,
              marginVertical: "auto",
              transform: [{ rotate: "45deg" }]
            }}
            color={"#6366f1"}
          />
        )}
      />
    )
  };
  return <RNToast config={toastConfig} />;
}
