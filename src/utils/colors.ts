import { TAILWIND_COLORS as tw } from "@/lib/constants";
import { capitalize } from "@/utils";

/**
 * Generates an adaptive color string based on the current color scheme.
 *
 * @param color - The base color as a string.
 * @param tone - The color tone as a number.
 * @returns An adaptive color string in the format `${color}${tone}${capitalize(colorScheme)}`.
 */
export function getAdaptiveColor(
  color: string,
  tone: number,
  colorScheme: "dark" | "light" | null = "dark"
) {
  return `$${color}${tone}${colorScheme ? capitalize(colorScheme) : "Dark"}`;
}

/**
 * Generates an adaptive Tailwind CSS color string based on the current color scheme.
 *
 * @param color - The base Tailwind CSS color as a string.
 * @param toneInDark - The Tailwind CSS color tone to use in dark mode, as a number between 50 and 950.
 * @returns Adabtive HEX code from `TAILWIND_COLORS` constant object
 */
export function getAdabtiveTWColor(
  color: string,
  toneInDark = 500,
  colorScheme: "dark" | "light" | null = "dark"
) {
  if (toneInDark > 950 || toneInDark < 50) {
    console.error(`Zameel Error: ${toneInDark} is not a TailwindCSS color tone.`);
    return;
  }
  const toneInLight = 1000 - toneInDark;
  return tw[color][colorScheme === "light" ? toneInLight : toneInDark];
}
