import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: ${(props) => props.flexGrow && '1'};
    height: ${(props) => props.height && props.height};
    width: 100%;
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

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
