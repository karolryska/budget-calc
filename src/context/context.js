import { createContext, useEffect, useState } from 'react';
import { saveData, getData } from 'helpers/manageData';
import { sumRecords } from 'helpers/sumRecords';
import { sumCategories } from 'helpers/categories';

const context = {
    sum: 0,
    categoriesSum: {
        income: [],
        expense: [],
    },
    store: [],
    updateStore: null,
};

export const Storage = createContext(context);

const AppProvider = ({ children }) => {
    const [items, setItems] = useState(getData().items);
    const [sum, setSum] = useState(getData().sum);
    const [categoriesSum, setCategoriesSum] = useState(getData().categoriesSum);

    const updateItems = (data, currentType) => {
        setItems(data);
        setSum(sumRecords(data));

        const categories = categoriesSum;
        categories[currentType] = sumCategories(data, currentType);
        setCategoriesSum(categories);
    };

    useEffect(() =>
        saveData({ items, sum, categoriesSum }, [items, sum, categoriesSum])
    );

    return (
        <Storage.Provider
            value={{
                sum: sum,
                store: items,
                categoriesSum: categoriesSum,
                updateStore: updateItems,
            }}
        >
            {children}
        </Storage.Provider>
    );
};

export default AppProvider;
