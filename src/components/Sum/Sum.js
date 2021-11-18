import styled from 'styled-components';
import Section from 'components/Section/Section';

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

const Sum = () => {
    return (
        <Section alignment="center">
            <Wrapper>
                <Header>100</Header>
            </Wrapper>
        </Section>
    );
};

export default Sum;
