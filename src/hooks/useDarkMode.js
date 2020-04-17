import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

export const useDarkMode = key => {
  const [value, setValue] = useLocalStorage(key);
  const docBody = document.querySelector("body");

  useEffect(() => {
    if (value) {
      docBody.classList.add("dark-mode");
    } else {
      docBody.classList.remove("dark-mode");
    }
  });
  return [value, setValue];
};
