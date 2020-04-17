import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

export const useDarkMode = key => {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  const docBody = document.querySelector("body");

  useEffect(() => {
    if (darkMode) {
      docBody.classList.add("dark-mode");
    } else {
      docBody.classList.remove("dark-mode");
    }
  });
  return [darkMode, setDarkMode];
};
