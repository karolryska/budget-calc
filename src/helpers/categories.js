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

const formattedExpenses = [];
expenses.forEach((category) =>
    formattedExpenses.push({ name: category, sum: 0 })
);

export const sumCategories = (data) => {
    const categories = formattedExpenses;
    categories.forEach((category) => (category.sum = 0));
    data.forEach((record) => {
        if (record.type === 'expense') {
            const index = categories.findIndex(
                (category) => category.name === record.category
            );
            categories[index].sum += record.price;
        }
    });

    return categories;
};
