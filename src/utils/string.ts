/**
 * Capitalizes the first character of the provided text.
 *
 * @param text - The input text to capitalize.
 * @returns The input text with the first character capitalized.
 */
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
