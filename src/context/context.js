import { createContext, useState } from 'react';

const context = {
    store: [],
    updateStore: null,
};

export const Storage = createContext(context);

const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const updateItems = (data) => {
        setItems(data);
    };

    return (
        <Storage.Provider value={{ store: items, updateStore: updateItems }}>
            {children}
        </Storage.Provider>
    );
};

export default AppProvider;
