// components/Graph.js
import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import './Graph.scss';

function Graph() {
    const data = [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 7 },
        // Add more data points as needed
    ];

    return (
        <div className="graph">
            <h1>Graph</h1>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}
            >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={['One', 'Two', 'Three', 'Four', 'Five']}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => `$${x}`}
                />
                <VictoryLine
                    data={data}
                    x="x"
                    y="y"
                />
            </VictoryChart>
        </div>
    );
}

export default Graph;
