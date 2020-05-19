import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

//psudedocode
//to use dark mode set class dark-mode on BODY tag
//do so when navbar second div has class of toggled
//this is already coded into navbar.js, needs fuction to complete coding

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);
    const selectBody = document.querySelector('body');
    useEffect(()=> {
            if (darkMode){
                selectBody.classList.add('dark-mode');
            } else {
                selectBody.classList.remove('dark-mode');
            }
        }, [darkMode]
    )
            
                            
    
    return [darkMode, setDarkMode]
    
};
                                          
