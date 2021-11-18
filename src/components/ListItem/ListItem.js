import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

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

const ListItem = () => {
    return (
        <Wrapper>
            <p>category</p>
            <p>+ 250</p>
            <DeleteButton>
                <DeteleIcon />
            </DeleteButton>
        </Wrapper>
    );
};

export default ListItem;
