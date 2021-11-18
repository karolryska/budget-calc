import styled from 'styled-components';
import Section from 'components/Section/Section';
import ListItem from 'components/ListItem/ListItem';

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    list-style: none;
`;

const List = () => {
    return (
        <Section>
            <Wrapper>
                <ListItem>item</ListItem>
                <ListItem>item</ListItem>
                <ListItem>item</ListItem>
            </Wrapper>
        </Section>
    );
};

export default List;
