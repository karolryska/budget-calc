export const sumRecords = (data) => {
    let sum = 0;
    data.forEach((record) => {
        console.log(typeof record.price);
        record.type === 'income'
            ? (sum += record.price)
            : (sum -= record.price);
    });

    return sum;
};
