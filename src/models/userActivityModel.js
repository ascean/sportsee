import { ActivityModel } from "./activityModel";
import PropTypes from "prop-types";
//Model for ActivityGraph
export class UserActivityModel {
    constructor(data) {
        this.userId     = data.userId
        this.sessions   = []

        data.sessions.forEach(element => {
            let session = new ActivityModel(element)
            this.sessions.push(session)
        });
    }
}

UserActivityModel.propTypes = {
    userId:     PropTypes.number,
    sessions:   PropTypes.instanceOf(ActivityModel),
}
