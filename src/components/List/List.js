import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Storage } from 'context/context';
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
    const [activeItem, setActiveItem] = useState();

    const handleClick = (id) => {
        activeItem === id ? setActiveItem(null) : setActiveItem(id);
    };

    return (
        <Wrapper>
            {store.map((item) => (
                <ListItem
                    data={item}
                    key={item.id}
                    handleItemClick={handleClick}
                    isActive={activeItem === item.id && true}
                />
            ))}
        </Wrapper>
    );
};

export default List;
