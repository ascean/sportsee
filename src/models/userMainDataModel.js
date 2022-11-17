import { KeyDataModel } from "./keyDataModel";
import { UserInfosModel } from "./userInfosModel";
import PropTypes from "prop-types";

//Model for userInfos, activityGraph, objectifGraph and keyDatas 
export class UserMainDataModel {
    constructor(data) {
        this.id = data.id;
        if (data.score) {
            this.todayScore = data.score;
        }
        if (data.todayScore) {
            this.todayScore = data.todayScore;
        }
        this.userInfos = new UserInfosModel(data.userInfos);
        this.keyData    = new KeyDataModel(data.keyData);
    }
}

UserMainDataModel.propTypes = {
    id:         PropTypes.number,
    todayScore: PropTypes.number,
    score:      PropTypes.number,
    userInfos:  PropTypes.instanceOf(UserInfosModel),
    keyData:    PropTypes.instanceOf(KeyDataModel),
};
