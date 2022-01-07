import styled from 'styled-components';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
} from 'recharts';

import { theme } from 'styles/theme';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;

    @media (min-width: 769px) {
        height: 100%;
    }
`;

const Info = styled.p`
    text-transform: uppercase;
`;

const LineGraph = ({ data, dataKey }) => {
    return (
        <Wrapper>
            {data.length > 0 ? (
                <ResponsiveContainer width="99.9%" height="100%">
                    <LineChart data={[{ value: 0 }].concat(data)}>
                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey={dataKey}
                            stroke={theme.colors.blue}
                            activeDot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <Info>no data</Info>
            )}
        </Wrapper>
    );
};

export default LineGraph;
