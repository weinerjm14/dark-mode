import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

//psudedocode
//to use dark mode set class dark-mode on BODY tag
//do so when navbar second div has class of toggled
//this is already coded into navbar.js, needs fuction to complete coding

export const useDarkMode = (key, initialValue, cb) => {
    const [value, setValue] = useLocalStorage(key, initialValue)
   
    function makeDark () {
        if (value = true){
          useEffect(document.body.classList.add('dark-mode'));        
        } else {
                useEffect(document.body.classList.remove('dark-mode'));    
            }
    }

     

    return [value, makeDark]
    
};

