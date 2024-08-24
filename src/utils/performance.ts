/**
 * Debounces a function, ensuring that it is only called after a specified timeout period has elapsed since the last time it was invoked.
 *
 * @param func - The function to be debounced.
 * @param timeout - The timeout period in milliseconds. Defaults to 500 milliseconds.
 * @returns A debounced version of the input function.
 */
export function debounce(func, timeout = 500) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
