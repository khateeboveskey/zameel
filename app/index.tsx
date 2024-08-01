import { useColorScheme } from "react-native";

import FirstOnboard from "./onboarding";

export default function Home() {
  const colorScheme = useColorScheme();
  return <FirstOnboard />;
}
