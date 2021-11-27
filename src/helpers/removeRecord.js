import setValues from './setValues';

const removeRecord = (data, removedId) => {
    return setValues(data.filter((item) => item.id !== removedId));
};

export default removeRecord;
