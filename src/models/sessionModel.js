import PropTypes from "prop-types";

export class SessionModel {
    /**
     * Model for SessionGraph
     * called in userAverageSessionModel
     * @param {Object} data USER_AVERAGE_SESSIONS.sessions
     * @param {string} data.day session day
     * @param {number} data.sessionLength session length
     * @example
     * { "day" : "L", "sessionLength" : 30}
     */
    constructor(data) {
        this.day            = data.day;
        this.sessionLength  = data.sessionLength
    }
}

SessionModel.propTypes = {
    day:            PropTypes.string,
    sessionLength:  PropTypes.number,
}