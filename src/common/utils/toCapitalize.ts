export const toCapitalize = (str?: string | null) => {
  if (!str) {
    return "";
  }

  return str
    .split(/\s+/)
    .map((word) => {
      if (word.length === 1) {
        return word.toLowerCase();
      }

      return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
