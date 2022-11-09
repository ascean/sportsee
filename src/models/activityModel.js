import PropTypes from "prop-types";

/**
 * Model for USER_ACTIVITY.sessions datas
 * called in userActivityModel
 */
export class Activity {
    constructor(data) {
        this.day        = data.day;
        this.kilogram   = data.kilogram;
        this.calories   = data.calories;
    }
}

Activity.propTypes = {
    day:        PropTypes.string,
    kilogram:   PropTypes.number,
    calories:   PropTypes.number,
}