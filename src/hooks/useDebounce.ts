export const useDebounce = (fn: Function, delay: number) => {
  let isTimeout: any;
  return (...args: any) => {
    if (isTimeout) {
      clearTimeout(isTimeout);
    }
    isTimeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
