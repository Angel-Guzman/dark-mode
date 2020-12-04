import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('theme', initialValue);
    
    const body = document.querySelector('body')
    
    useEffect(() => {
        if (someValue === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [someValue, body])

    return [someValue, setSomeValue];
}