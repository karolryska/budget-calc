import { createContext, useState } from 'react';
import { saveData, getData } from 'helpers/manageData';

const context = {
    store: [],
    updateStore: null,
};

export const Storage = createContext(context);

const AppProvider = ({ children }) => {
    const [items, setItems] = useState(getData);
    const updateItems = (data) => {
        setItems(data);
        saveData(data);
    };

    return (
        <Storage.Provider value={{ store: items, updateStore: updateItems }}>
            {children}
        </Storage.Provider>
    );
};

export default AppProvider;
