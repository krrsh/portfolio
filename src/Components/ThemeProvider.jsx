import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const toggleTheme = ()=>{
    setTheme((prevState)=> (prevState === 'light' ? 'dark' : 'light'))
  };
  useEffect(()=>{
    document.body.setAttribute('theme-data', theme);
    localStorage.setItem('theme',theme)
  },[theme])

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

