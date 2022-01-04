export const incomes = {
    bonus: {
        color: '#ff5722',
    },
    salary: {
        color: '#ffc107',
    },
    other: {
        color: '#cddc39',
    },
};

export const expenses = {
    bills: {
        color: '#f44336',
    },
    car: {
        color: '#e91e63',
    },
    clothes: {
        color: '#9c27b0',
    },
    coffee: {
        color: '#3f51b5',
    },
    groceries: {
        color: '#03a9f4',
    },
    restaurant: {
        color: '#009688',
    },
    other: {
        color: '#8bc34a',
    },
};

export const incomesList = () => {
    const list = [];
    for (const key in incomes) {
        list.push(key);
    }
    return list;
};

export const expensesList = () => {
    const list = [];
    for (const key in expenses) {
        list.push(key);
    }
    return list;
};

export const sumCategories = (data, currentType) => {
    const currentTypeRecords = data.filter(
        (record) => record.type === currentType
    );

    const currentTypeList = () =>
        currentType === 'income' ? incomes : expenses;

    const categories = [];

    currentTypeRecords.forEach((record) => {
        const index = categories.findIndex(
            (category) => category.name === record.category
        );
        if (categories[index]) {
            categories[index].sum += record.price;
        } else {
            categories.push({
                name: record.category,
                sum: record.price,
                color: currentTypeList()[record.category].color,
            });
        }
    });

    return categories;
};
