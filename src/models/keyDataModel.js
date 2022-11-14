import PropTypes from "prop-types";

export class KeyDataModel{
    /**
     * Model for USER_MAIN_DATA.keyData, 
     * called in UserMainDataModel
     * @param {Object} data
     * @param {number} data.calorieCount number of calories
     * @param {number} data.proteinCount number of protein
     * @param {number} data.carbohydrateCount number of glucid
     * @param {number} data.lipidCount number of lipid
     * @example
     * { "calorieCount" : 1930, "carbohydrateCount" : 290, "lipidCount" : 50, "proteinCount" : 155 }
     */
    constructor(data) {
        console.log(data);
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