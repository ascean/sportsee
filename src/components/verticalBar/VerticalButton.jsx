import React from "react";

const VerticalButton = (props) => {
    
    let buttonDatas = props.buttonDatas
    
    return (
        <li>
            <button className="btn-lateral">
                <img src={buttonDatas.img} alt={buttonDatas.alt} />
            </button>
        </li>
    );
};

export default VerticalButton;
