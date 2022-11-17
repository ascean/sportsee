import { SessionModel } from "./sessionModel"
import PropTypes from "prop-types";

//Model for SessionGraph
export class UserAverageSessionModel {
    constructor(data) {
        this.userId     = data.userId
        this.sessions   = []
        
        for (let i = 0; i < data.sessions.length; i++) {
            let newSession  = new SessionModel(data.sessions[i])
            this.sessions.push(newSession)
        }
    }
}

UserAverageSessionModel.propTypes = {
    userId:     PropTypes.number,
    sessions:   PropTypes.instanceOf(SessionModel),
}
