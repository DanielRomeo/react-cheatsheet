'use client'
import { PropsWithChildren, createContext, useContext, useState } from 'react';

// create the context type, to pass to the creation of the context:
type ContextType = [string, (theme: string) => void];

// create the context(passing in the type or undefined(coz its possible for it to be undefined))
export const ThemeContext = createContext<ContextType | undefined>(undefined);
 
// create the actual provider
export default function Home({ children }: PropsWithChildren<{}>){
  const value = useState('');
 
  return (
    <ThemeContext.Provider value={value}>
      {children}
      <Water></Water>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
 
  if (!context) {
    throw new Error('useThemeContext must be used inside the ThemeProvider');
  }
 
  return context;
};

 
export const ThemeSwitch = () => {
    const [theme, setTheme] = useThemeContext();
   
    return (
      <div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle theme
        </button>
      </div>
    );
  };

  export const Water = () => {
    const [theme, setTheme] = useThemeContext();
   
    return (
      <div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle theme
        </button>
      </div>
    );
  };

// export default function Home(){
    
//     return (
//         <div>
//           <ThemeProvider></ThemeProvider>
//         </div>
//     )
// }

