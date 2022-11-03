import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";


const PerformanceRadar = (props) => {
    const datas = props.performanceDatas;

    //array des types de performances
    const kindLabel = Object.values(props.performanceDatas.kind)
    //1ère lettre en majuscule
    const firstLettertoUpperCase = kindLabel.map((element => {
        return (element + '').charAt(0).toUpperCase() + element.substr(1)
    }))    

    //ajout d'une valeur à l'objet datas avec la performance en lettres
    const datasKind = datas.data
    for (let i = 0; i < datasKind.length; i++) {
        let element = datasKind[i].kind
        datasKind[i]["label"] = firstLettertoUpperCase[element-1]
    }



    return (

        <ResponsiveContainer width="100%" height="90%">
            <RadarChart
                cx={'50%'}
                cy={'50%'}
                outerRadius={60}
                data={datas.data}
                //width={'50%'}
                //height={230}
                
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

export default PerformanceRadar;
