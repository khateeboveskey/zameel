import { z } from "zod";

const validate = {
  email: (email: string) => {
    const emailSchema = z.string().email({ message: "عذراً، يرجى كتابة بريد إلكتروني صحيح." });
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      return result.error.issues;
    }
    return [];
  },
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

export default validate;
