import PropTypes from "prop-types";

/**
 * Model for USER_AVERAGE_SESSIONS.sessions datas
 * called in userAverageSessionModel
 */
export class Session {
    constructor(data) {
        this.day            = data.day;
        this.sessionLength  = data.sessionLength
        
    }
}

Session.propTypes = {
    day:            PropTypes.string,
    sessionLength:  PropTypes.number,
}