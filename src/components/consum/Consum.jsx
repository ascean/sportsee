import React from "react";

const Consum = (props) => {
    const consumerData = props.consumerData;
    return (
        <div className="consum-item">
            <div className={`icon ${consumerData.classCategory}`}>
                <img src={consumerData.img} alt="" />
            </div>
            <div className="consum-values">
                <p className="consum-data">
                    {consumerData.count} {consumerData.unit}
                </p>
                <p className="consum-label">{consumerData.label}</p>
            </div>
        </div>
    );
};

export default Consum;
