import React from 'react';
import VerticalButton from './VerticalButton';

const VerticalBar = () => {

    class Button {
        constructor(alt, img) {
            this.alt = alt;
            this.img = img;
        }
    }

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