import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;

    @media (min-width: 769px) {
        flex-direction: row;
        height: 100%;
        width: 50%;
    }
`;

const Info = styled.p`
    text-transform: uppercase;
`;

const PieGraph = ({ data }) => {
    return (
        <Wrapper>
            {data && data.length > 0 ? (
                <ResponsiveContainer width="99%" height="99%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="sum"
                            innerRadius="50%"
                            outerRadius="75%"
                            paddingAngle={6}
                        >
                            {data.map((category, i) => (
                                <Cell key={`cell-${i}`} fill={category.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            ) : (
                <Info>no data</Info>
            )}
        </Wrapper>
    );
};

export default PieGraph;
