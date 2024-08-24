import { useEffect } from "react";

/**
 * A React hook that debounces the provided effect function.
 *
 * @param effect - The effect function to be debounced.
 * @param deps - The dependencies array for the effect function.
 * @param delay - The delay in milliseconds before the effect function is executed. Defaults to 500 milliseconds.
 * @returns A cleanup function that can be used to cancel the debounced effect.
 */
export function useDebouncedEffect(effect, deps, delay = 500) {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
}
