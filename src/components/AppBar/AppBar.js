import styled from 'styled-components';

const Wrapper = styled.header`
    z-index: 1;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100vw;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 769px) {
        height: 100px;
    }
`;

const Title = styled.h1`
    font-size: 26px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: 769px) {
        font-size: 30px;
    }
`;

const AppBar = () => {
    return (
        <Wrapper>
            <Title>Budget tracker</Title>
        </Wrapper>
    );
};

export default AppBar;
