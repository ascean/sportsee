import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

/**
 * Display RadarChart with performances
 * @param {Object} performanceDatas from USER_PERFORMANCE
 * @returns HTMLElement
 */
const Performance = ({performanceDatas}) => {

    //example of performanceDatas
    // userId : 12
    // data [ {value: 80, kind: 1, label: 'Cardio'}, { value: 120, kind: 2, label: 'Energy' }, ...]
    // kind ["Cardio", "Energy",...]

    //add  key/value "label" : label in data
    const kindDatas = performanceDatas.data
    for (let i = 0; i < kindDatas.length; i++) {
        kindDatas[i]["label"] = performanceDatas.kind[i]
    }

    //example of performanceDatas.data
    //data [ {value: 80, kind: 1, label: 'Cardio'}, { value: 120, kind: 2, label: 'Energy' },... ]

    return (

        <ResponsiveContainer width="100%" height="90%">
            <RadarChart
                cx={'50%'}
                cy={'50%'}
                outerRadius={60}
                data={performanceDatas.data}
                
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <Radar
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.7}
                    />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default Performance;
