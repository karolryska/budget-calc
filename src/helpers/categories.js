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
    const categories = [];

    data.forEach((record) => {
        const index = categories.findIndex(
            (category) => category.name === record.category
        );
        if (record.type === 'expense' && categories[index]) {
            categories[index].sum += record.price;
        } else if (record.type === 'expense' && !categories[index]) {
            categories.push({ name: record.category, sum: record.price });
        }
    });

    return categories;
};
