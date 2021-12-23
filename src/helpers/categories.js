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

export const sumCategories = (data, currentType) => {
    const currentTypeRecords = data.filter(
        (record) => record.type === currentType
    );

    const categories = [];

    currentTypeRecords.forEach((record) => {
        const index = categories.findIndex(
            (category) => category.name === record.category
        );
        if (categories[index]) {
            categories[index].sum += record.price;
        } else {
            categories.push({ name: record.category, sum: record.price });
        }
    });

    return categories;
};
