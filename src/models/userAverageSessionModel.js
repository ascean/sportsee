import { SessionModel } from "./sessionModel"
import PropTypes from "prop-types";

export class UserAverageSessionModel {
    /**
     * Model for SessionGraph, 
     * call SessionModel
     * @param {Object} data USER_AVERAGE_SESSIONS
     * @param {number} data.userId User code
     * @param {Array.<{day:string, sessionsLength:number}>} data.sessions user data sessions
     * @example
     * { userId : 12 , [{ "day" : "M", "sessionLength": 23 }, { }, { } ...]
}
     */
    constructor(data) {
        console.log("1",data);
        this.userId     = data.userId
        this.sessions   = []
        
        const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
        for (let i = 0; i < data.sessions.length; i++) {
            const element   = data.sessions[i];
            element.day     = dayLetter[i];
            let newSession  = new SessionModel(element)
            this.sessions.push(newSession)
        }
    }
}

UserAverageSessionModel.propTypes = {
    userId:     PropTypes.number,
    sessions:   PropTypes.instanceOf(SessionModel),
}
