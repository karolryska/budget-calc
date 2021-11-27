const removeRecord = (data, removedId) => {
    const removedIndex = data.findIndex((item) => item.id === removedId);
    const newArray = data.filter((item) => item.id !== removedId);
    for (let i = removedIndex; i < newArray.length; i++) {
        newArray[i].value = newArray[i - 1].value + newArray[i].price;
    }

    return newArray;
};

export default removeRecord;
