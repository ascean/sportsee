import PropTypes from "prop-types";

export class ActivityModel {
    /**
     * Model for ActivityGraph datas, 
     * called in userActivityModel
     * @param {Object} data USER_ACTIVITY.sessions 
     * @param {string} data.day session day
     * @param {number} data.kilogram number of kilogram
     * @param {number} data.calories number of calories
     * @example 
     * { "day" : '2020-07-01', "kilogram" : 80, "calories" : 240 }
     */
    constructor(data) {
        console.log(data);
        this.day        = data.day;
        this.kilogram   = data.kilogram;
        this.calories   = data.calories;
    }
}

ActivityModel.propTypes = {
    day:        PropTypes.string,
    kilogram:   PropTypes.number,
    calories:   PropTypes.number,
}