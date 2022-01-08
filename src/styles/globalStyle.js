import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0
    }

    body {
        font-family: 'Inter', sans-serif;
    }
  
    a, button {
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyle;