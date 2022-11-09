import React from "react";

/**
 * Display message with user name
 * @param {Object} userDatas 
 * @returns HTMLElement
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
