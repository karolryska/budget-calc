import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { MdArrowBackIosNew } from 'react-icons/md';

import { Storage } from 'context/context';
import calculateValue from 'helpers/calculateValue';
import {
    incomesList as incomes,
    expensesList as expenses,
} from 'helpers/categories';

const Wrapper = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Header = styled.h1`
    margin-bottom: 30px;
    font-size: 28px;
`;

const RadioInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const InputWrapper = styled.p`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const RadioLabel = styled.label`
    margin-left: 5px;
`;

const Label = styled.label`
    margin-bottom: 8px;
`;

const SelectInput = styled.select`
    padding: 5px;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
`;

const Input = styled.input`
    padding: 5px;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 6px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: #1976d2;
    color: #ffffff;
    cursor: pointer;
`;

const BackButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border: none;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;

    & > * {
        font-size: 30px;
    }
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
            <BackButton onClick={onSave}>
                <MdArrowBackIosNew />
            </BackButton>
            <Header>Add record!</Header>
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
                <SelectInput {...register('category', { required: true })}>
                    {categories.map((category, i) => (
                        <option value={category} key={uuidv4()}>
                            {category}
                        </option>
                    ))}
                </SelectInput>
            </InputWrapper>
            <InputWrapper>
                <Label>price</Label>
                <Input
                    type="number"
                    {...register('price', { required: true })}
                />
            </InputWrapper>
            <Button type="submit">add</Button>
        </Wrapper>
    );
};

export default Form;
