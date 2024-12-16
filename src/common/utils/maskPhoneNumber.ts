export const maskPhoneNumber = (value: string | undefined) => {
  if (!value) {
    return "";
  }

  // Удаляем все нечисловые символы
  let input = value.replace(/\D/g, "");

  // Ограничиваем длину до 9 символов
  if (input.length > 9) {
    input = input.slice(0, 9);
  }

  // Форматируем значение в соответствии с маской "## ###-##-##"
  const formattedValue = input.replace(
    /(\d{2})?(\d{3})?(\d{2})?(\d{2})?/,
    (_, p1, p2, p3, p4) => {
      const parts = [p1, p2 ? ` ${p2}` : "", p3 ? `-${p3}` : "", p4 ? `-${p4}` : ""];
      return parts.filter(Boolean).join("");
    }
  );

  return formattedValue;
};