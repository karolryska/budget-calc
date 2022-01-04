import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    width: 100%;
    margin: 8px 0 20px;

    @media (min-width: 769px) {
        display: flex;
        flex-direction: column;
        width: auto;
    }
`;

const Name = styled.p`
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
        transform: translateY(-50%);
        content: '';
    }
`;

const Legend = ({ data }) => {
    return (
        <Wrapper>
            {data.map((item) => (
                <Name color={item.color}>{item.name}</Name>
            ))}
        </Wrapper>
    );
};

export default Legend;
