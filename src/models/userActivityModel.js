import { Activity } from "./activityModel";
import PropTypes from "prop-types";

/**
 * Model for USER_ACTIVITY datas
 * called in USER
 * calling Activity model
 */
export class UserActivity {
    constructor(data) {
        this.userId     = data.userId
        this.sessions   = []

        data.sessions.forEach(element => {
            let session = new Activity(element)
            this.sessions.push(session)
        });
    }
}

UserActivity.propTypes = {
    userId:     PropTypes.number,
    sessions:   PropTypes.instanceOf(Activity),
}