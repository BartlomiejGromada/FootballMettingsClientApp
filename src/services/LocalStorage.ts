const LocalStorage = {
  get<T>(key: string) {
    const text = localStorage.getItem(key);
    if (text) return JSON.parse(text) as T;

    return undefined;
  },

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};

export { LocalStorage };
