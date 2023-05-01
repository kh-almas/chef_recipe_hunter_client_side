import React, {createContext, useState} from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    const ThemeInfo = {
        darkMode,
        toggleDarkMode
    }
    return (
        <ThemeContext.Provider value={ThemeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;