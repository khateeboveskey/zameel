import { z } from "zod";

const validate = {
  email: (email: string) => {
    const emailSchema = z.string().email({ message: "عذراً، يرجى كتابة بريد إلكتروني صحيح." });
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      return result.error.issues;
    }
    return [];
  }
};

export default validate;
