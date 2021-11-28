export const saveData = (data) => {
    localStorage.setItem('storage', JSON.stringify(data));
};

export const getData = () => {
    if (localStorage.getItem('storage')) {
        return JSON.parse(localStorage.getItem('storage'));
    } else {
        return { items: [], sum: 0, categoriesSum: {} };
    }
};
