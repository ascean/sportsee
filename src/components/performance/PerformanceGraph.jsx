import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

/**
 * Component RadarChart with performances
 * @param {Object} performanceDatas USER_PERFORMANCE
 * @param {number} performanceDatas.userId user code
 * @param {Array.<{value:number, kind:number, label:string}>} performanceDatas.data Values for each performance
 * @param {Array.<string>} performanceDatas.kind kind of performances
 * @returns {ReactElement} RadarChart
 * @example
 * userId : 12
 * kind [ "Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité" ]
 * data [ { "value": 80, "kind": 1, "label": "1"},
          { "value": 120, "kind": 2, "label": "2"},... ]
          */
const PerformanceGraph = ({ performanceDatas }) => {

    //update performancesDatas.data.label with performancesDatas.kind
    const kindDatas = performanceDatas.data;
    for (let i = 0; i < kindDatas.length; i++) {
        kindDatas[i]["label"] = performanceDatas.kind[i+1];
        // data [ { "value": 80, "kind": 1, "label": "Cardio"},
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                cx={"50%"}
                cy={"50%"}
                outerRadius={"50%"}
                data={performanceDatas.data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default PerformanceGraph;
