import { Session } from "./sessionModel"
import PropTypes from "prop-types";

/**
 * Model for USER_AVERAGE_SESSIONS
 * call Session model
 */
export class UserAverageSession {
    constructor(data) {
        this.userId     = data.userId
        this.sessions   = []
        
        const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
        for (let i = 0; i < data.sessions.length; i++) {
            const element   = data.sessions[i];
            element.day     = dayLetter[i];
            let newSession  = new Session(element)
            this.sessions.push(newSession)
        }
    }
}

UserAverageSession.propTypes = {
    userId:     PropTypes.number,
    sessions:   PropTypes.instanceOf(Session),
}
