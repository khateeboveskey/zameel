import { useColorScheme } from "react-native";
import { getAdaptiveColor, getAdabtiveTWColor } from "../lib/utils";

/**
 * A React hook that returns an adaptive color based on the user's device color scheme.
 *
 * @param color - The base color to use, as a string.
 * @param tone - The tone or shade of the color, as a number.
 * @param tailwind - An optional boolean flag to use Tailwind CSS color utilities instead of the custom `getAdaptiveColor` function.
 * @returns The adaptive color, either as a CSS color string or a Tailwind CSS utility class.
 */
export function useAdaptiveColor(color: string, tone: number, tailwind: boolean = false): string {
  const colorScheme = useColorScheme();
  if (tailwind) {
    return getAdabtiveTWColor(color, tone, colorScheme);
  } else {
    return getAdaptiveColor(color, tone, colorScheme);
  }
}
