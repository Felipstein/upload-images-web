import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => {

  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
};