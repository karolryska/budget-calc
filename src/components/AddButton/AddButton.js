import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';

const Button = styled.button`
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 25px;
    border: none;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blueHover};
    }
`;
const Icon = styled(GoPlus)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white}; ;
`;

const AddButton = ({ handleClick }) => {
    return (
        <Button onClick={handleClick}>
            <Icon />
        </Button>
    );
};

export default AddButton;
