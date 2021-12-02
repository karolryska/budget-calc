import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Info = styled.p`
    text-transform: uppercase;
`;

const PieGraph = ({ data }) => {
    return (
        <Wrapper>
            {data.length > 0 ? (
                <ResponsiveContainer width="99%" height="99%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="sum"
                            outerRadius="70%"
                            fill="#8884d8"
                        ></Pie>
                    </PieChart>
                </ResponsiveContainer>
            ) : (
                <Info>no data</Info>
            )}
        </Wrapper>
    );
};

export default PieGraph;
