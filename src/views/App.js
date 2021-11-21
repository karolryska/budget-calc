import { useContext, useState } from 'react';
import styled from 'styled-components';

import { Storage } from 'context/context';
import Form from 'components/Form/Form';
import Section from 'components/Section/Section';
import Sum from 'components/Sum/Sum';
import List from 'components/List/List';
import LineGraph from 'components/LineGraph/LineGraph';
import AddButton from 'components/AddButton/AddButton';
import { sumRecords } from 'helpers/sumRecords';
import { formatData } from 'helpers/formatData';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    padding: 20px;
    background-color: #bdbdbd;
`;

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 40px;
`;

const App = () => {
    const [isFormActive, setIsFormActive] = useState(false);
    const { store } = useContext(Storage);
    const handleClick = () => setIsFormActive(!isFormActive);
    return (
        <>
            {isFormActive ? (
                <Form onSave={handleClick} />
            ) : (
                <Wrapper>
                    <Sum value={sumRecords(store)} />
                    <List />
                    <ButtonWrapper>
                        <AddButton handleClick={handleClick} />
                    </ButtonWrapper>
                    <Section height="200px">
                        <LineGraph data={formatData(store)} dataKey="value" />
                    </Section>
                </Wrapper>
            )}
        </>
    );
};

export default App;
