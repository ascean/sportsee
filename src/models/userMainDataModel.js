import { KeyDataModel } from "./keyDataModel";
import { UserInfosModel } from "./userInfosModel";
import PropTypes from "prop-types";

export class UserMainDataModel {
    /**
     * Model for USER_MAIN_DATA
     * called in USER
     * calling UserInfosModel and KeyDataModel
     * @param {Object} data
     * @param {number} data.id User code
     * @param {number} [data.score] User objectif score
     * @param {number} data.todayScore User objectif score
     * @param {UserInfosModel} data.userInfos User informations (firstname, lastname, age)
     * @param {KeyDataModel} data.keyData User datas consum (calorie, protein, glucid, lipid)
     */
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
