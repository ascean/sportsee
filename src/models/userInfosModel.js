import PropTypes from "prop-types";

//Model for welcome message
export class UserInfosModel {
    constructor(data) {
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