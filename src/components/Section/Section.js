import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: ${(props) => (props.sizeAuto ? 'auto' : '100%')};
    width: ${(props) => (props.sizeAuto ? 'auto' : '100%')};
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    grid-area: ${(props) => props.area};

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 769px) {
        flex-direction: row;
        margin-bottom: 0;
        overflow-x: hidden;
    }
`;

const Section = ({ children, area, sizeAuto }) => {
    return (
        <Wrapper area={area} sizeAuto={sizeAuto}>
            {children}
        </Wrapper>
    );
};

export default Section;
