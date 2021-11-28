const calculateValue = (currentSum, type, price) => {
    return type === 'income'
        ? Number(currentSum) + Number(price)
        : Number(currentSum) - Number(price);
};

export default calculateValue;
