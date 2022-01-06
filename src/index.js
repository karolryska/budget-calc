import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from 'context/context';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import App from 'views/App';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
