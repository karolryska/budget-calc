import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: none;
`;
const Icon = styled(GoPlus)`
    font-size: 30px;
`;

const AddButton = ({ handleClick }) => {
    return (
        <Button onClick={handleClick}>
            <Icon />
        </Button>
    );
};

export default AddButton;
