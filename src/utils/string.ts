/**
 * Capitalizes the first character of the provided text.
 *
 * @param text - The input text to capitalize.
 * @returns The input text with the first character capitalized.
 */
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getArabicStatusCodeMessage(statusCode: number) {
  const statusMessages = {
    200: "تمت العملية بنجاح",
    201: "تم الإنشاء بنجاح",
    400: "طلب غير صالح",
    401: "غير مصرح به",
    403: "ممنوع الوصول",
    404: "الصفحة غير موجودة",
    408: "انتهت مهلة الطلب",
    500: "خطأ في الخادم",
    502: "بوابة غير صالحة",
    503: "الخدمة غير متوفرة",
    504: "انتهت مهلة البوابة"
  };

  return statusMessages[statusCode];
}
