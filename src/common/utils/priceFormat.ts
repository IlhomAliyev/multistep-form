export const priceFormat = (price: number | undefined | null) => {
  if (!price) return "";

  const intl = new Intl.NumberFormat("ru-RU");

  return intl.format(price);
};
