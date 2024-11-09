import { useEffect, useState } from "react";

import Signup from "@/app/(auth)/signup";
import Onboarding from "@/app/onboarding";
import { useAsyncStorage } from "@/hooks";

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const { getItem } = useAsyncStorage();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const isFirstLaunch = await getItem("isFirstLaunch");
      setShowOnboarding(isFirstLaunch === "true");
    };
    checkFirstLaunch();
  }, [getItem]);

  return showOnboarding ? <Onboarding /> : <Signup />;
}
