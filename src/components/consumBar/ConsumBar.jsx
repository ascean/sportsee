import React from "react";

const ConsumBar = (props) => {
    const consumerData = props.consumerData;
    return (
        <div className="consumbar-item">
            <div className={`icon ${consumerData.classCategory}`}>
                <img src={consumerData.img} alt="" />
            </div>
            <div className="consumbar-values">
                <p className="consumbar-data">
                    {consumerData.count} {consumerData.unit}
                </p>
                <p className="consumbar-label">{consumerData.label}</p>
            </div>
        </div>
    );
};

export default ConsumBar;
