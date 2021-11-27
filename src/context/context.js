import { createContext, useState } from 'react';
import { saveData, getData } from 'helpers/manageData';
import { sumRecords } from 'helpers/sumRecords';

const context = {
    sum: 0,
    store: [],
    updateStore: null,
};

export const Storage = createContext(context);

const AppProvider = ({ children }) => {
    const [items, setItems] = useState(getData);
    const [sum, setSum] = useState(0);
    const updateItems = (data) => {
        setSum(sumRecords(data));
        setItems(data);
        saveData(data);
    };

    return (
        <Storage.Provider
            value={{ sum: sum, store: items, updateStore: updateItems }}
        >
            {children}
        </Storage.Provider>
    );
};

export default AppProvider;
