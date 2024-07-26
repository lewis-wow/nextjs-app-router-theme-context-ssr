'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { setCookie } from 'nookies';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error();

  return themeContext;
};

export const ThemeContextProvider = ({ children, ssrValue }: { children: ReactNode; ssrValue: Theme }) => {
  const [theme, setTheme] = useState(ssrValue);

  useEffect(() => {
    setCookie(null, 'theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
