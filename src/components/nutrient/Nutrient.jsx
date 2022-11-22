import React from "react";

/**
 * Component for right section with calory, protein, lipid... elements
 * @param {FormattedNutrientModel} datas USER_MAIN_DATA.keyData
 * @returns {ReactElement} LineChart 
 */
const Nutrient = ({ datas }) => {
    
    return (
        <div className="nutrient-item">
            <div className={`icon ${datas.classIcon}`}>
                <img src={datas.img} alt="" />
            </div>
            <div className="nutrient-values">
                <p className="nutrient-data">
                    {datas.count} {datas.unit}
                </p>
                <p className="nutrient-label">{datas.label}</p>
            </div>
        </div>
    );
};

export default Nutrient;
