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

const ActivityBar = (props) => {
    const datas = props.activityDatas.sessions;
    datas.map((data, index) => (data.day = index + 1));

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-activity">
                    <p className="label">{`${payload[0].value}kg`}</p>
                    <p className="label">{`${payload[1].value}kCal`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            <h2>Activité quotidienne</h2>
            <BarChart
                width={600}
                height={220}
                data={datas}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                barCategoryGap={"30%"}
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

export default ActivityBar;
