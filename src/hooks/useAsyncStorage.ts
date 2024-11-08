import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAsyncStorage() {
  /**
   * Asynchronously stores the provided value under the specified key in the device's AsyncStorage.
   *
   * @param key - The key to store the value under.
   * @param value - The value to store. If `isObject` is true, the value will be JSON-encoded before storing.
   * @param isObject - Indicates whether the provided value is a JavaScript object that should be JSON-encoded before storing.
   * @returns A Promise that resolves to `true` if the value was successfully stored, or `false` if an error occurred.
   */
  const setItem = async (key: string, value: string, isObject = false) => {
    try {
      await AsyncStorage.setItem(key, isObject ? JSON.stringify(value) : value);
      return true;
    } catch (e) {
      console.error(`Error in setItem: ${e}`);
      return false;
    }
  };

  /**
   * Asynchronously retrieves the value stored under the specified key in the device's AsyncStorage.
   *
   * @param key - The key to retrieve the value for.
   * @param isObject - Indicates whether the stored value is a JSON-encoded object. If true, the value will be parsed from JSON.
   * @returns A Promise that resolves with the retrieved value, or null if the key does not exist. If an error occurs, the Promise will reject.
   */
  const getItem = async (key: string, isObject = false) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return isObject ? JSON.parse(value) : value;
      }
    } catch (e) {
      console.error(`Error in getItem: ${e}`);
      return null;
    }
  };

  /**
   * Asynchronously removes the value stored under the specified key in the device's AsyncStorage.
   *
   * @param key - The key to remove the value for.
   * @returns A Promise that resolves to `true` if the value was successfully removed, or `false` if an error occurred.
   */
  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error(`Error in getItem: ${e}`);
      return false;
    }
  };

  return { setItem, getItem, removeItem };
}
