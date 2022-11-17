import React from "react";

/**
 * Component message with user Firstname
 * @param {String} firstName User firstname
 * @returns {ReactElement} welcome message

 */
const UserInfos = ({ firstName }) => {
    return (
        <div>
            <h1>
                <span>Bonjour </span>
                <span className="name">{firstName}</span>
            </h1>
            <p className="message">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    );
};

export default UserInfos;
