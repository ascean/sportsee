import React from "react";

/**
 * Render right section with calory, protein, lipid... elements
 * @param {FormattedKeyDataModel} datas USER_MAIN_DATA.keyData
 * @returns {ReactElement} LineChart 
 */
const KeyData = ({ datas }) => {
    
    return (
        <div className="keydata-item">
            <div className={`icon ${datas.classIcon}`}>
                <img src={datas.img} alt="" />
            </div>
            <div className="keydata-values">
                <p className="keydata-data">
                    {datas.count} {datas.unit}
                </p>
                <p className="keydata-label">{datas.label}</p>
            </div>
        </div>
    );
};

export default KeyData;
