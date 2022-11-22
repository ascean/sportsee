import React from 'react';
import { ButtonModel } from '../../models/buttonModel';
import VerticalButton from './VerticalButton';
import cycling from '../verticalBar/assets/images/cycling.png'
import weightlifting from '../verticalBar/assets/images/weightlifting.png'
import yoga from '../verticalBar/assets/images/yoga.png'
import swimming from '../verticalBar/assets/images/swimming.png'

/**
 * Component for left and vertical bar
 * @returns {ReactElement} Vertical bar
 */
const VerticalBar = () => {

    return (
        <section className='bar-container'>
            <ul>
                <VerticalButton buttonDatas={new ButtonModel("yoga", yoga)}/>
                <VerticalButton buttonDatas={new ButtonModel("swimming", swimming)}/>
                <VerticalButton buttonDatas={new ButtonModel("cyclisme", cycling)}/>
                <VerticalButton buttonDatas={new ButtonModel("weightlifting", weightlifting)}/>
            </ul>
            <p>
                Copyright, SportSee 2020
            </p>
        </section>
    );
};

export default VerticalBar;