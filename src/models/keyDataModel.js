import PropTypes from "prop-types";

/**
 * Model for USER_MAIN_DATA.keyData
 * called in userMainDataModel
 */
export class KeyData {
    constructor(data) {
        this.calorieCount       = data.calorieCount;
        this.proteinCount       = data.proteinCount;
        this.carbohydrateCount  = data.carbohydrateCount;
        this.lipidCount         = data.lipidCount;
    }
}

KeyData.propTypes = {
    calorieCount:       PropTypes.number,
    proteinCount:       PropTypes.number,
    carbohydrateCount:  PropTypes.number,
    lipidCount:         PropTypes.number,
}