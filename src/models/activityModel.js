import PropTypes from "prop-types";

// Model for ActivityGraph datas
export class ActivityModel {
    constructor(data) {
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