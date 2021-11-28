export const incomes = ['salary', 'other'];
export const expenses = [
    'bills',
    'car',
    'clothes',
    'coffee',
    'groceries',
    'restaurant',
    'other',
];

export const sumCategories = (data) => {
    const categories = Object.fromEntries(
        expenses.map((category) => [category, 0])
    );

    data.forEach((record) => {
        if (record.type === 'expense')
            categories[record.category] += record.price;
    });

    return categories;
};
