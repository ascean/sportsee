import PropTypes from "prop-types";

//Model for SessionGraph
export class SessionModel {
    constructor(data) {
        this.day            = data.day;
        this.sessionLength  = data.sessionLength
    }
}

SessionModel.propTypes = {
    day:            PropTypes.string,
    sessionLength:  PropTypes.number,
}