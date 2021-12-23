import { useContext } from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { Storage } from 'context/context';
import removeRecord from 'helpers/removeRecord';

const Wrapper = styled.li`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
    margin-bottom: 30px;

    &:before {
        position: absolute;
        bottom: -16px;
        left: 0;
        content: '';
        height: 1px;
        width: 100%;
        background-color: #000000;
    }

    &:last-child {
        margin-bottom: 0;

        &:before {
            display: none;
        }
    }
`;

const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const DeteleIcon = styled(MdDelete)`
    transform: scale(2) translateY(1px);
    &:hover {
        color: #b71c1c;
    }
`;

const Price = styled.p`
    position: relative;
    color: ${(props) => (props.type === 'income' ? 'green' : 'red')};
    &::before {
        position: absolute;
        top: 0;
        left: ${(props) => (props.type === 'income' ? '-12px' : '-10px')};
        content: '${(props) => (props.type === 'income' ? '+' : '-')}';
    }
`;

const Listdata = ({ data }) => {
    const { store, updateStore } = useContext(Storage);
    const handleClick = (id, type) => {
        const updatedArray = removeRecord(store, id);
        updateStore(updatedArray, type);
    };

    return (
        <Wrapper>
            <p>{data.category}</p>
            <Price type={data.type}>{data.price}</Price>
            <DeleteButton onClick={() => handleClick(data.id, data.type)}>
                <DeteleIcon />
            </DeleteButton>
        </Wrapper>
    );
};

export default Listdata;
