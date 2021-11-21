import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Header = styled.h1`
    font-size: 40px;
`;

const Sum = ({ value }) => {
    return (
        <Wrapper>
            <Header>{value}</Header>
        </Wrapper>
    );
};

export default Sum;
