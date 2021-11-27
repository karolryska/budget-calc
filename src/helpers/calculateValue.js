const calculateValue = (currentSum, newItem) => {
    return newItem.type === 'income'
        ? Number(currentSum) + Number(newItem.price)
        : Number(currentSum) - Number(newItem.price);
};

export default calculateValue;
