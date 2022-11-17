import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
} from "recharts";

/**
 * Component BarChart with USER_ACTIVITY.sessions 
 * @param {Array.<{day:number, kilogram:number, calories:number}>} activityDatas 
 * @returns {ReactElement} BarChart
 */
const ActivityGraph = ({ activityDatas }) => {

    //in xaxis, display number for each day instead of the date
    activityDatas.map((data, index) => (data.day = index + 1));

    /**
     * Component tooltip on BarChart hover
     * @param {Object} props
     * @param {boolean} props.active
     * @param {Array.<{name:string, fill:string, dataKey:string, color:string, value:integer, payload:Object}>} props.payload
     * @returns {ReactElement} 
     * @example
     * {
            "name": "Poids (kg)",
            "fill": "black",
            "dataKey": "kilogram",
            "color": "black",
            "value": 80,
            "payload": {
                "day": 1,
                "kilogram": 80,
                "calories": 240
            }
        }
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-activity">
                    <p className="label">{`${payload[0].payload.kilogram}kg`}</p>
                    <p className="label">{`${payload[1].payload.calories}kCal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div width="100%" height={"100%"}>
            <h2>Activité quotidienne</h2>
            <BarChart
                width={600}
                height={250}
                data={activityDatas}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                barGap={"12%"}
                barSize={7}
            >
                <Tooltip content={<CustomTooltip />} />

                <CartesianGrid vertical={"false"} strokeDasharray="2 2" />
                <XAxis
                    dataKey="day"
                    tickMargin={10}
                    padding={{ left: -30, right: -30 }}
                />
                <YAxis
                    orientation="right"
                    axisLine="false"
                    stroke="transparent"
                    tickMargin={20}
                />
                <Legend
                    align="right"
                    verticalAlign="top"
                    iconType="circle"
                    iconSize="10"
                    height="50px"
                />
                <Bar
                    dataKey="kilogram"
                    name="Poids (kg)"
                    fill="black"
                    shape={<Rectangle radius={[10, 10, 0, 0]} />}
                />
                <Bar
                    dataKey="calories"
                    name="Calories brûlées (kCal)"
                    fill="#E60000"
                    shape={<Rectangle radius={[10, 10, 0, 0]} />}
                />
            </BarChart>
        </div>
    );
};

export default ActivityGraph;
