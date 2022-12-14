import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

/**
 * Component LineChart with sessions length datas
 * @param {Object} sessionDatas
 * @param {number} sessionDatas.userId User code
 * @param {Array.<{day:string, sessionLength:number}>} sessionDatas.sessions User data sessions (day, length)
 * @returns {ReactElement} LineChart
 */
const SessionGraph = ({ sessionDatas }) => {

    const renderLegend = () => "Durée moyenne des sessions";
    
    /**
     * Render tooltip on LineChart hover
     * @param {Object} props
     * @param {boolean} props.active
     * @param {Array.<{value:number}>} props.payload
     * @returns {ReactElement}
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-session">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }

        return null;
    };

    return (
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={250}
                    height={150}
                    data={sessionDatas}
                    style={{ color: "#FF8181" }}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                    onMouseMove={(e) => {
                        let div = document.querySelector(".session-container");
                        div.style.background = "#FF0000";
                        if (e.isTooltipActive === true) {
                            let windowWidth = div.clientWidth;
                            let mouseXpercentage = Math.round(
                                (e.activeCoordinate.x / windowWidth) * 100
                            );
                            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, 
                                                                        rgba(230,0,0,1.5) ${mouseXpercentage}%, 
                                                                        rgba(230,0,0,1.5) 100%)`;
                        }
                    }}
                >
                    <defs>
                        <linearGradient
                            id="colorLine"
                            x1="0%"
                            y1="0"
                            x2="100%"
                            y2="0"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(255,255,255,0.5)"
                            />
                            <stop
                                offset={`${50}%`}
                                stopColor="rgba(255,255,255,0.5)"
                            />
                            <stop offset={`${100}%`} stopColor="#FFF" />
                        </linearGradient>
                    </defs>
                <XAxis dataKey="day" tickMargin={25} tickSize={1} interval={0} />
                    <Legend
                        verticalAlign="top"
                        width={"70%"}
                        height={40}
                        iconSize="5"
                        content={renderLegend}
                    />

                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorLine)"
                        strokeWidth="2"
                        dot={{ r: 0 }}
                        activeDot={{
                            stroke: "rgba(255, 255, 255, 0.3)",
                            strokeWidth: 10,
                            r: 4,
                        }}
                    />
                    <Tooltip cursor={false} content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
    );
};
export default SessionGraph;
