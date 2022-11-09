import PropTypes from "prop-types";

/**
 * Model for USER_MAIN_DATA.userInfos datas
 * called in userMainDataModel
 */
export class UserInfos {
    constructor(data) {
        this.firstName  = data.firstName;
        this.lastName   = data.lastName;
        this.age        = data.age;
    }
}

UserInfos.propTypes = {
    firstName:  PropTypes.string,
    lastName:   PropTypes.string,
    age:        PropTypes.number,
};