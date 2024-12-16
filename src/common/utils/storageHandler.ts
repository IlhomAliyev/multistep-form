export const getLocalData = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : undefined;
};

export const setLocalData = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalData = (key: string) => {
  localStorage.removeItem(key);
};
