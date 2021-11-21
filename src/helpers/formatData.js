export const formatData = (data) => {
    let formattedData = data;
    let currentSum = 0;
    formattedData.forEach((element) => {
        element.type === 'income'
            ? (currentSum += element.price)
            : (currentSum -= element.price);
        element.value = currentSum;
    });
    return [{ value: 0 }].concat(formattedData);
};
