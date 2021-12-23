import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Storage } from 'context/context';
import calculateValue from 'helpers/calculateValue';
import { incomes, expenses } from 'helpers/categories';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 160px;
`;

const RadioInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const InputWrapper = styled.p`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const RadioLabel = styled.label`
    margin-left: 5px;
`;

const Label = styled.label`
    margin-bottom: 5px;
`;

const Form = ({ onSave }) => {
    const { sum, store, updateStore } = useContext(Storage);
    const [type, setType] = useState('income');
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit } = useForm();

    const handleRadio = (type) => {
        setType(type);
        type === 'income' ? setCategories(incomes) : setCategories(expenses);
    };

    const onSubmit = (data) => {
        updateStore(
            store.concat({
                ...data,
                type: type,
                price: Number(data.price),
                value: calculateValue(sum, type, Number(data.price)),
                id: uuidv4(),
            }),
            type
        );
        onSave();
    };

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <h2>Add record!</h2>
            <RadioInputs>
                <p>
                    <input
                        onChange={(e) => handleRadio(e.target.value)}
                        type="radio"
                        name="type"
                        value="income"
                        id="income"
                    />
                    <RadioLabel htmlFor="income">income</RadioLabel>
                </p>
                <p>
                    <input
                        onChange={(e) => handleRadio(e.target.value)}
                        type="radio"
                        name="type"
                        value="expense"
                        id="expense"
                    />
                    <RadioLabel htmlFor="expense">expense</RadioLabel>
                </p>
            </RadioInputs>
            <InputWrapper>
                <Label>category</Label>
                <select {...register('category', { required: true })}>
                    {categories.map((category) => (
                        <option value={category} key={uuidv4()}>
                            {category}
                        </option>
                    ))}
                </select>
            </InputWrapper>
            <InputWrapper>
                <Label>price</Label>
                <input
                    type="number"
                    {...register('price', { required: true })}
                />
            </InputWrapper>
            <button type="submit">add</button>
        </Wrapper>
    );
};

export default Form;
