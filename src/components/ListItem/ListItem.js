import { useContext } from 'react';
import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

import { Storage } from 'context/context';
import removeRecord from 'helpers/removeRecord';
import { incomes, expenses } from 'helpers/categories';

const Wrapper = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 0;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #f2f2f2;
    overflow: hidden;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    transition: 0.2s;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        background-color: #eeeeee;
    }
`;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    padding: 10px;
`;

const Category = styled.p`
    position: relative;
    padding-left: 20px;

    &::before {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 0;
        height: 14px;
        width: 14px;
        border-radius: 7px;
        border: 4px solid;
        border-color: ${(props) => props.color};
        background-color: ${(props) => props.color};
        background-color: ${(props) =>
            props.type === 'income' && 'transparent'};
        transform: translateY(-50%);
        content: '';
    }
`;

const Price = styled.p`
    position: relative;
    color: ${(props) => (props.type === 'income' ? '#4caf50' : '#f44336')};

    &::before {
        position: absolute;
        top: 0;
        left: ${(props) => (props.type === 'income' ? '-12px' : '-10px')};
        content: '${(props) => (props.type === 'income' ? '+' : '-')}';
    }
`;

const DeleteButton = styled.button`
    padding: 0 15px;
    border: none;
    background-color: #d50000;
    cursor: pointer;
`;

const DeteleIcon = styled(TiDelete)`
    transform: scale(2) translateY(1px);
    color: #ffffff;
`;

const ListItem = ({ data, handleItemClick, isActive }) => {
    const { store, updateStore } = useContext(Storage);

    const categoryColor = () => {
        return data.type === 'income'
            ? incomes[data.category].color
            : expenses[data.category].color;
    };

    const handleWrapperClick = () => {
        handleItemClick(data.id);
    };

    const handleDeleteClick = (id, type) => {
        const updatedArray = removeRecord(store, id);
        updateStore(updatedArray, type);
    };

    return (
        <Wrapper onClick={handleWrapperClick}>
            <DataWrapper>
                <Category type={data.type} color={categoryColor}>
                    {data.category}
                </Category>
                <Price type={data.type}>{data.price}</Price>
            </DataWrapper>
            {isActive && (
                <DeleteButton
                    onClick={() => handleDeleteClick(data.id, data.type)}
                >
                    <DeteleIcon />
                </DeleteButton>
            )}
        </Wrapper>
    );
};

export default ListItem;
