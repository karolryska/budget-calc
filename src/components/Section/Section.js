import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: ${(props) => props.flexGrow && '1'};
    height: ${(props) => props.height && props.height};
    width: 100%;
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #fafafa;

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 769px) {
        flex-direction: row;
    }
`;

const Section = ({ children, height, flexGrow }) => {
    return (
        <Wrapper height={height} flexGrow={flexGrow}>
            {children}
        </Wrapper>
    );
};

export default Section;
