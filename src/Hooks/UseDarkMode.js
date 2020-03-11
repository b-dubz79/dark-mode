import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    useLocalStorage(dMode)
    
}


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = (updatedValue) => {
        setValue(updatedValue); 
    }
    return [value, setValue, handleChanges]
}