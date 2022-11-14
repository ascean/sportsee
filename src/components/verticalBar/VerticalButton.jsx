import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Create a nav button in verticar bar
 * @param {Object} buttonDatas 
 * @param {string} buttonDatas.alt alt attribute
 * @param {string} buttonDatas.img image source
 * @returns {ReactElement} 
 */
const VerticalButton = ({buttonDatas}) => {
    return (
        <NavLink to="/">
            <li className="btn-lateral">
                <img src={buttonDatas.img} alt={buttonDatas.alt} />
            </li>
        </NavLink>
    );
};

export default VerticalButton;