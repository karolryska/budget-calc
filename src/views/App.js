import { useContext, useState } from 'react';
import styled from 'styled-components';

import { Storage } from 'context/context';
import Form from 'components/Form/Form';
import Section from 'components/Section/Section';
import Sum from 'components/Sum/Sum';
import List from 'components/List/List';
import LineGraph from 'components/LineGraph/LineGraph';
import PieGraph from 'components/PieGraph/PieGraph';
import AddButton from 'components/AddButton/AddButton';
import useWidth from 'hooks/useWidth';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    padding: 20px;
    background-color: #bdbdbd;

    @media (min-width: 769px) {
        flex-direction: row;
        align-items: stretch;
    }
`;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    margin: 0 0 20px 0;

    @media (min-width: 769px) {
        height: auto;
        width: 30%;
        margin: 0 20px 0 0;
    }
`;

const ChartsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 40px;
`;

const App = () => {
    const [isFormActive, setIsFormActive] = useState(false);
    const { sum, store, categoriesSum } = useContext(Storage);
    const handleClick = () => setIsFormActive(!isFormActive);
    const [isMobile] = useWidth();

    return (
        <>
            {isFormActive ? (
                <Form onSave={handleClick} />
            ) : (
                <Wrapper>
                    <DataWrapper>
                        <Section>
                            <Sum value={sum} />
                        </Section>
                        <Section flexGrow>
                            <List />
                        </Section>
                    </DataWrapper>
                    <ChartsWrapper>
                        <Section height={isMobile ? '200px' : '50%'}>
                            <LineGraph data={store} dataKey="value" />
                        </Section>
                        <Section height={isMobile ? '600px' : '50%'}>
                            <PieGraph data={categoriesSum.income} />
                            <PieGraph data={categoriesSum.expense} />
                        </Section>
                    </ChartsWrapper>
                    <ButtonWrapper>
                        <AddButton handleClick={handleClick} />
                    </ButtonWrapper>
                </Wrapper>
            )}
        </>
    );
};

export default App;
