// todo: move this to ../types/
/**
 * Represents the props for a form input component.
 * @property {string} id - A unique identifier for the form input.
 * @property {string} label - The label for the form input.
 * @property {string} value - The current value of the form input.
 * @property {(text: string) => void} onChangeText - Callback function that is called when the value of the form input changes.
 * @property {string} [placeholder] - The placeholder text to display in the form input when it is empty.
 * @property {boolean} [isValid] - Indicates whether the form input is valid or not.
 * @property {boolean} [secureTextEntry] - Indicates whether the form input should display the entered text as secure (e.g. password input).
 * @property {boolean} [noValidate] - Indicates whether the form input should not be validated.
 */
export declare type FormInputProps = {
  /**
   * A unique identifier for the form input.
   */
  id: string;
  /**
   * The label for the form input.
   */
  label: string;
  /**
   * The current value of the form input.
   */
  value: string;
  /**
   * Callback function that is called when the value of the form input changes.
   * @param text - The new value of the form input.
   */
  onChangeText: (text: string) => void;
  /**
   * The placeholder text to display in the form input when it is empty.
   */
  placeholder?: string;
  /**
   * Indicates whether the form input is valid or not.
   */
  isValid?: boolean;
  /**
   * Indicates whether the form input should display the entered text as secure (e.g. password input).
   */
  secureTextEntry?: boolean;
  /**
   * Indicates whether the form input should not be validated.
   */
  noValidate?: boolean;
};

/**
 * Represents the props for a form input feedback component.
 * @property {string} value - The current value of the form input.
 * @property {string} validate - The validation rule for the form input.
 * @property {(errors: object[]) => void} [onValidationErrors] - Callback function that is called when there are validation errors for the form input.
 */
export declare type FormInputFeedbackProps = {
  /**
   * The current value of the form input.
   */
  value: string;
  /**
   * The validation rule for the form input.
   */
  validate: string;
  /**
   * Callback function that is called when there are validation errors for the form input.
   * @param errors - An array of validation error objects.
   */
  onValidationErrors?: (errors: object[]) => void;
};

/**
 * Represents the props for a logo component.
 * @property {string} [color] - The color of the logo. Defaults to `PRIMARY_COLOR`.
 */
export declare type LogoProps = {
  /**
   * The color of the element.
   * @default PRIMARY_COLOR
   */
  color?: string;
};
