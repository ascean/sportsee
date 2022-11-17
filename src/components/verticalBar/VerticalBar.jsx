import React from 'react';
import { ButtonModel } from '../../models/buttonModel';
import VerticalButton from './VerticalButton';

/**
 * Component for left and vertical bar
 * @returns {ReactElement} Vertical bar
 */
const VerticalBar = () => {

    /**
     * Create a new component with specifics alt attribute and img source 
     * @param {string} type yoga, natation, cyclisme or halterophilie
     * @returns {Button}  
     */
    const constructButton = (type) => {
        return (new ButtonModel(type, "/images/"+type+".png"))
    };

    return (
        <section className='bar-container'>
            <ul>
                <VerticalButton buttonDatas={constructButton("yoga")}/>
                <VerticalButton buttonDatas={constructButton("natation")}/>
                <VerticalButton buttonDatas={constructButton("cyclisme")}/>
                <VerticalButton buttonDatas={constructButton("halterophilie")}/>
            </ul>
            <p>
                Copyright, SportSee 2020
            </p>
        </section>
    );
};

export default VerticalBar;