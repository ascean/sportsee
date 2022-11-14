import React from "react";

/**
 * Render message with user Firstname
 * @param {String} firstName User firstname
 * @returns {ReactElement} welcome message

 */
const UserInfos = ({firstName}) => {
    return (
        <section className="user-infos">
            <h1>
                <span>Bonjour </span>
                <span className="name">{firstName}</span>
            </h1>
            <p className="message">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    );
};

export default UserInfos;
