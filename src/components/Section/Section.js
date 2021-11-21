import styled from 'styled-components';

const Wrapper = styled.section`
    height: ${(props) => props.height};
    width: 100%;
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #fafafa;
`;

const Section = ({ children, height }) => {
    return <Wrapper height={height}>{children}</Wrapper>;
};

export default Section;
