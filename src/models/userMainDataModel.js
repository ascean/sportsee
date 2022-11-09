import { KeyData } from "./keyDataModel";
import { UserInfos } from "./userInfosModel";
import PropTypes from "prop-types";

/**
 * Model for USER_MAIN_DATA
 * called in USER
 * calling UserIfnos and KeyData models
 */
export class UserMainData {
    constructor(data) {
        this.id = data.id;
        if (data.score) {
            this.todayScore = data.score;
        }
        if (data.todayScore) {
            this.todayScore = data.todayScore;
        }
        this.userInfos  = new UserInfos(data.userInfos);
        this.keyData    = new KeyData(data.keyData);
    }
}

UserMainData.propTypes = {
    id:         PropTypes.number,
    todayScore: PropTypes.number,
    score:      PropTypes.number,
    userInfos:  PropTypes.instanceOf(UserInfos),
    keyData:    PropTypes.instanceOf(KeyData),
};
