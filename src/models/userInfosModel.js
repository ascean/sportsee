import PropTypes from "prop-types";

export class UserInfosModel {
    /**
     * Model for welcome message
     * called in UserMainDataModel
     * @param {Object} data USER_MAIN_DATA.userInfos
     * @param {string} data.firstName User firstname 
     * @param {string} data.lastName User lastname
     * @param {number} data.age User age
     * @example
     * { "firstName": "Karl", "lastName": "Dovineau", "age": 31 }
}
     */
    constructor(data) {
        console.log(data);
        this.firstName  = data.firstName;
        this.lastName   = data.lastName;
        this.age        = data.age;
    }
}

UserInfosModel.propTypes = {
    firstName:  PropTypes.string,
    lastName:   PropTypes.string,
    age:        PropTypes.number,
};