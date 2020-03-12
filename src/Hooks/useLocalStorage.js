import React from 'react'
import {useState} from 'react'
import ls from 'local-storage'


const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = JSON.parse(window.localStorage.getItem(key));
        return item !== undefined ? item : initialValue
    });
    const setValue = value => {
        setStoredValue(value);
        // ls.set(key, value)  this is the easier way using local-storage npm module
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    return[storedValue, setValue];
}

export default useLocalStorage;