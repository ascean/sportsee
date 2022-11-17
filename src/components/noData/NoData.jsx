import React from 'react';

/**
 * Component displayed when API error is occurred
 * @returns {ReactElement} Error component
 */
const NoData = () => {
    return (
        <div className='error-API'>
            Données indisponibles
        </div>
    );
};

export default NoData;