import React from "react";
import {
    Legend,
    RadialBar,
    RadialBarChart,
} from "recharts";

const Objectif = (props) => {
    const score = props.objectifDatas.todayScore*100
    const objectifDatas = Math.round(props.objectifDatas.todayScore* 360);
    const endAngle = 90 + objectifDatas
    const data = [{ todayScore: objectifDatas , fill:"red"}];
    
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
                data={data}
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
                
                {/* <Tooltip /> */}

            </RadialBarChart>
        </div>
    );
};

export default Objectif;