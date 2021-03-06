import { useContext, useState } from 'react';
import styled from 'styled-components';

import { Storage } from 'context/context';
import Form from 'components/Form/Form';
import AppBar from 'components/AppBar/AppBar';
import Section from 'components/Section/Section';
import Sum from 'components/Sum/Sum';
import List from 'components/List/List';
import LineGraph from 'components/LineGraph/LineGraph';
import PieGraph from 'components/PieGraph/PieGraph';
import AddButton from 'components/AddButton/AddButton';
import useHeight from 'hooks/useHeight';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.grey};

    @media (min-width: 769px) {
        height: auto;
    }
`;

const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100vw;
    padding: 20px;

    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: minmax(250px, 25%) 1fr;
        grid-template-rows: repeat(6, 1fr);
        grid-gap: 20px;
        grid-template-areas:
            'sum lineChart'
            'records lineChart'
            'records lineChart'
            'records pieChart'
            'records pieChart'
            'records pieChart';
        height: ${(props) => (props.height > 668 ? props.height : 668)}px;
    }
`;

const App = () => {
    const [height] = useHeight();
    const [isFormActive, setIsFormActive] = useState(false);
    const { sum, store, categoriesSum } = useContext(Storage);
    const handleClick = () => setIsFormActive(!isFormActive);

    return (
        <Wrapper>
            {isFormActive ? (
                <Section sizeAuto>
                    <Form onSave={handleClick} />
                </Section>
            ) : (
                <>
                    <AppBar />
                    <ContentWrapper height={height - 100}>
                        <Section area="sum">
                            <Sum value={sum} />
                        </Section>
                        <Section area="records">
                            <List />
                        </Section>
                        <Section area="lineChart">
                            <LineGraph data={store} dataKey="value" />
                        </Section>
                        <Section area="pieChart">
                            <PieGraph data={categoriesSum.income} />
                            <PieGraph data={categoriesSum.expense} />
                        </Section>
                    </ContentWrapper>
                    <AddButton handleClick={handleClick} />
                </>
            )}
        </Wrapper>
    );
};

export default App;
