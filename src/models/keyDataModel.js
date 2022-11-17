import PropTypes from "prop-types";

//Model for USER_MAIN_DATA.keyData, 
export class KeyDataModel{
    constructor(data) {
        this.calorieCount       = data.calorieCount;
        this.proteinCount       = data.proteinCount;
        this.carbohydrateCount  = data.carbohydrateCount;
        this.lipidCount = data.lipidCount;
    }
}

KeyDataModel.propTypes = {
    calorieCount:       PropTypes.number,
    proteinCount:       PropTypes.number,
    carbohydrateCount:  PropTypes.number,
    lipidCount:         PropTypes.number,
}