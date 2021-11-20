import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from 'context/context';
import GlobalStyle from 'styles/globalStyle';
import App from 'views/App';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <GlobalStyle />
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
