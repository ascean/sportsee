import React from "react";

const UserInfos = ({userDatas}) => {
    return (
        <section className="user-infos">
            <h1>
                <span>Bonjour </span>
                <span className="red">{userDatas.userInfos.firstName}</span>
            </h1>
            <p className="message">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    );
};

export default UserInfos;
