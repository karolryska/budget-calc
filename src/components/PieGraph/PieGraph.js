import React, { useState, useRef, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

import Legend from 'components/Legend/Legend';
import useWidth from 'hooks/useWidth';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    const [isMobile] = useWidth();
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const wrapperRef = useRef(null);

    useEffect(() => {
        setWrapperWidth(wrapperRef.current.offsetWidth);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            {data && data.length > 0 ? (
                <>
                    <ResponsiveContainer
                        height={isMobile ? wrapperWidth : '95%'}
                        width={isMobile ? '100%' : '75%'}
                    >
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="sum"
                                innerRadius="60%"
                                outerRadius="90%"
                                paddingAngle={6}
                            >
                                {data.map((category, i) => (
                                    <Cell
                                        key={`cell-${i}`}
                                        fill={category.color}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <Legend data={data} />
                </>
            ) : (
                <Info>no data</Info>
            )}
        </Wrapper>
    );
};

export default PieGraph;
