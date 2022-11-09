import React from "react";
import {
    Legend,
    RadialBar,
    RadialBarChart,
} from "recharts";

/**
 * RadialBarChart with USER_MAIN_DATA.todayScore
 * @param {Object} todayScore 
 * @returns HTMLElement 
 */
const Objectif = ({ todayScore }) => {

    //percentage display
    const score = todayScore * 100

    //red part cicular
    const circleScore = Math.round(todayScore * 360);
    
    //length of red part
    const endAngle = 90 + circleScore
    
    const dataScore = [{ todayScore: circleScore, fill: "red" }];

    const renderLegend = () => {
        return (
            <div className="objectif-text">
                <p className="objectif-percentage">{score}%</p>
                <p className="objectif-label">de votre objectif</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Score</h2>
            <RadialBarChart
                width={200}
                height={200}
                innerRadius="80%"
                outerRadius="90%"
                data={dataScore}
                startAngle={90}
                endAngle={endAngle}
            >
                <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="center"
                    width={"50%"}
                    content={renderLegend}

                />
                <RadialBar
                    dataKey="todayScore"
                    cornerRadius={30 / 2}
                />
                
            </RadialBarChart>
        </div>
    );
};

export default Objectif;