import React from 'react';
import VerticalButton from './VerticalButton';

const VerticalBar = () => {

    const constructButton = (i) => {
        let objectButtons = {};
        switch (i) {
            case 0:
                objectButtons = {
                    alt: "yoga",
                    img: "/images/yoga.png",
                };
                break;
            case 1:
                objectButtons = {
                    alt: "natation",
                    img: "/images/natation.png",
                };
                break;
            case 2:
                objectButtons = {
                    alt: "cyclisme",
                    img: "/images/cyclisme.png",
                };
                break;
            case 3:
                objectButtons = {
                    alt: "halterophilie",
                    img: "/images/halterophilie.png",
                };
                break;

            default:
                break;
        }
        return objectButtons;
    };
    

    return (
        <section className='bar-container'>
            <ul>
                <VerticalButton buttonDatas={constructButton(0)}/>
                <VerticalButton buttonDatas={constructButton(1)}/>
                <VerticalButton buttonDatas={constructButton(2)}/>
                <VerticalButton buttonDatas={constructButton(3)}/>
            </ul>
            <p>
                Copyright, SportSee 2020
            </p>
        </section>
    );
};

export default VerticalBar;