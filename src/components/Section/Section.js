import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #fafafa;
`;

const Section = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Section;
