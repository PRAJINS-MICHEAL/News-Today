import React , {useState , createContext , useContext} from "react";

const Themecontext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
setTheme((prev)=>(prev==='light'? 'dark':'light')  );
console.log("click to toggle");
}

    return (
        <Themecontext.Provider value={{theme, toggleTheme}}>
            {children}
        </Themecontext.Provider>
    )
}

export const useTheme = ()=>{
    return useContext(Themecontext)
}