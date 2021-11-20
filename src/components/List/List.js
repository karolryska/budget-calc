import { useContext } from 'react';
import styled from 'styled-components';
import { Storage } from 'context/context';
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
    const { store } = useContext(Storage);

    return (
        <Section>
            <Wrapper>
                {store.map((item) => (
                    <ListItem data={item} key={item.id} />
                ))}
            </Wrapper>
        </Section>
    );
};

export default List;
