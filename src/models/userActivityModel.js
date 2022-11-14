import { ActivityModel } from "./activityModel";
import PropTypes from "prop-types";

export class UserActivityModel {
    /**
     * Model for ActivityGraph, 
     * called in USER, 
     * calling ActivityModel
     * @param {Object} data USER_ACTIVITY datas
     * @param {number} data.userId User code
     * @param {Activity} data.sessions User datas (kilogram and calories)
     * @example
     * { userId : 12, sessions [ { day : '2020-07-01', kilogram : 80, calories : 240 }, { ... } ... ]
     */
    constructor(data) {
        console.log(data);
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
