import React from 'react';
import VerticalButton from './VerticalButton';

/**
 * Render the left and vertical bar
 * @returns {ReactElement} Vertical bar
 */
const VerticalBar = () => {

    class Button {
    /**
     * Create a button
     * @param {string} alt attribute alt
     * @param {string} img image source
     */
        constructor(alt, img) {
            this.alt = alt;
            this.img = img;
        }
    }

    /**
     * Create a new component with specifics alt attribute and img source 
     * @param {string} type yoga, natation, cyclisme or halterophilie
     * @returns {Button}  
     */
    const constructButton = (type) => {
        return (new Button(type, "/images/"+type+".png"))
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