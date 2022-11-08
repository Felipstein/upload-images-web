import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainContainer } from "./containers/MainContainer";
import CenterElements from "./containers/CenterElements";

import { ThemeContext } from "./contexts/ThemeContext";

import GlobalStyle from './styles/global';

export function App() {
  return (
    <ThemeContext>
      <ToastContainer
        position='top-right'
        closeOnClick
        hideProgressBar
        pauseOnFocusLoss
        closeButton
        autoClose={5000}
        theme="colored"
      />
      <CenterElements>
        <MainContainer />
        <GlobalStyle />
      </CenterElements>
    </ThemeContext>
  )
}