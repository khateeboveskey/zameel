import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import Login from "@/app/(auth)/login";
import Onboarding from "@/app/onboarding";
import { useAsyncStorage } from "@/hooks/useAsyncStorage";

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const { getItem } = useAsyncStorage();
  const router = useRouter();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const isFirstLaunch = await getItem("isFirstLaunch");
      const token = await getItem("token");

      if (token) {
        router.push("/(tabs)");
        return;
      }

      setShowOnboarding(isFirstLaunch === "true");
    };
    checkFirstLaunch();
  }, [getItem, router]);

  return showOnboarding ? <Onboarding /> : <Login />;
}
