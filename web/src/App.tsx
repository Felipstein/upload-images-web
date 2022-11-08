import { MyDropzone } from "./components/MyDropzone";
import { ThemeContext } from "./contexts/ThemeContext";

import GlobalStyle from './styles/global';

export function App() {
  return (
    <ThemeContext>
      <MyDropzone />
      <GlobalStyle />
    </ThemeContext>
  )
}