import { z } from "zod";

/**
 * Provides validation functions for common form fields.
 *
 * The `validate` object contains two validation functions:
 *
 * - `email`: Validates an email address string, returning an array of error messages if the email is invalid.
 * - `fullname`: Validates a full name string, returning an array of error messages if the name is not at least four words long.
 *
 * These validation functions use the Zod library for schema validation.
 */
export const validate = {
  /**
   * Validates the provided email string and returns an array of validation errors, if any.
   *
   * @param email - The email string to validate.
   * @returns An empty array if the email is valid, or an array containing a single error message if the email is invalid.
   */
  email: (email: string) => {
    const emailSchema = z.string().email({ message: "عذراً، يرجى كتابة بريد إلكتروني صحيح." });
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      return result.error.issues;
    }
    return [];
  },
  /**
   * Validates the provided full name string and returns an array of validation errors, if any.
   *
   * @param fullname - The full name string to validate.
   * @returns An empty array if the full name is valid, or an array containing a single error message if the full name is invalid.
   */
  fullname: (fullname: string) => {
    const fullnameSchema = z.string().refine((value) => value.trim().split(/\s+/).length >= 4, {
      message: "عذراً، يجب أن يكون الاسم رباعياً على الأقل."
    });
    const result = fullnameSchema.safeParse(fullname);
    if (!result.success) {
      return result.error.issues;
    }
    return [];
  }
};

/**
 * Checks if all values in the provided object are `true`.
 *
 * @param obj - An object with boolean values.
 * @returns `true` if all values in the object are `true`, `false` otherwise.
 */
export const validateBoolObject = (obj: { [key: string]: boolean }): boolean => {
  for (const key in obj) {
    if (!obj[key]) {
      return false;
    }
  }
  return true;
};
