import styled from 'styled-components';

const Wrapper = styled.section`
    height: 200px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #fafafa;
`;

const Section = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Section;
