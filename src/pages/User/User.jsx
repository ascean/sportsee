import React, { useEffect, useState } from "react";
import UserInfos from "../../components/userInfos/UserInfos";
import VerticalBar from "../../components/verticalBar/VerticalBar";
import { FormattedKeyDataModel } from "../../models/formattedKeyDataModel";
import { UserActivityModel } from "../../models/userActivityModel";
import { UserMainDataModel } from "../../models/userMainDataModel";
import { UserAverageSessionModel } from "../../models/userAverageSessionModel";
import {
    getUserInfos,
    getUserActivity,
    getUserSession,
    getUserPerformance,
} from "../../services/services";
import KeyData from "../../components/keyData/KeyData";
import { UserPerformanceModel } from "../../models/userPerformanceModel";
import ObjectifGraph from "../../components/objectif/ObjectifGraph";
import PerformanceGraph from "../../components/performance/PerformanceGraph";
import SessionGraph from "../../components/session/SessionGraph";
import ActivityGraph from "../../components/activity/ActivityGraph";

/**
 * Render the main page (profil page)
 * @returns {ReactElement}
 */
const User = () => {
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const [isLoadingActivity, setIsLoadingActivity] = useState(true);
    const [isLoadingSession, setIsLoadingSession] = useState(true);
    const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);
    const [userMainDatas, setUserMainDatas] = useState(null);
    const [activityDatas, setActivityDatas] = useState(null);
    const [sessionDatas, setSessionDatas] = useState(null);
    const [performanceDatas, setPerformanceDatas] = useState(null);
    const [caloryDatas, setCaloryDatas] = useState(null);
    const [proteinDatas, setProteinDatas] = useState(null);
    const [glucidDatas, setGlucidDatas] = useState(null);
    const [lipidDatas, setLipidDatas] = useState(null);

    useEffect(() => {
        //URL datas gestion
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        //12 = default value if no user_id in URL 
        let value = params.user_id ?? 12;

        getMainData(value);
        getActivityData(value);
        getSessionData(value);
        getPerformanceData(value);
    }, []);

    /**
     * get datas from API / USER_MAIN_DATA
     * @param {integer} userId User code
     */
    const getMainData = async (userId) => {
        const dataFromFetch = await getUserInfos(userId);
        const data = new UserMainDataModel(dataFromFetch);
        setUserMainDatas(data);
        setIsLoadingUser(false);
        formatKeyData(data.keyData);
    };

    /**
     * get datas from API / USER_ACTIVITY
     * @param {integer} userId User code
     */
    const getActivityData = async (userId) => {
        const dataFromFetch = await getUserActivity(userId);
        const data = new UserActivityModel(dataFromFetch);
        setActivityDatas(data.sessions);
        setIsLoadingActivity(false);
    };

    /**
     * get datas from API / USER_AVERAGE_SESSIONS
     * @param {integer} userId User code
     */
    const getSessionData = async (userId) => {
        const dataFromFetch = await getUserSession(userId);
        const data = new UserAverageSessionModel(dataFromFetch);
        setSessionDatas(data.sessions);
        setIsLoadingSession(false);
    };

    /**
     * get datas from APi - USER_PERFORMANCE
     * @param {integer} userId User code
     */
    const getPerformanceData = async (userId) => {
        const dataFromFetch = await getUserPerformance(userId);
        const data = new UserPerformanceModel(dataFromFetch);
        setPerformanceDatas(data);
        setIsLoadingPerformance(false);
    };

    /**
     * Format USER_MAIN_DATA.keyData datas (calory, protein...) in order to display
     * @param {Object} data USER_MAIN_DATAS.keyData
     * @param {string} data.key 
     * @param {string} data.label 
     * @param {string} data.unit
     * @param {string} data.img 
     * @param {number} data.count 
     * @param {string} data.classIcon 
     */
    const formatKeyData = (data) => {
        setCaloryDatas(
            new FormattedKeyDataModel(
                "calorie",
                "Calories",
                "kCal",
                `/icons/calorie.png`,
                data.calorieCount,
                "calorie-icon"
            )
        );
        setProteinDatas(
            new FormattedKeyDataModel(
                "protein",
                "Protéines",
                "g",
                `/icons/protein.png`,
                data.proteinCount,
                "protein-icon"
            )
        );
        setGlucidDatas(
            new FormattedKeyDataModel(
                "carbohydrate",
                "Glucides",
                "g",
                `/icons/carbohydrate.png`,
                data.carbohydrateCount,
                "glucid-icon"
            )
        );
        setLipidDatas(
            new FormattedKeyDataModel(
                "lipid",
                "Lipides",
                "g",
                `/icons/lipid.png`,
                data.lipidCount,
                "lipid-icon"
            )
        );
    };

    return (
        <main>
            <VerticalBar />
            <div className="main-content">
                {isLoadingUser ? (
                    "Loading"
                ) : (
                    <UserInfos firstName={userMainDatas.userInfos.firstName} />
                )}

                <section className="recharts-container">
                    <article className="left-container">
                        <div className="activity-container">
                            {isLoadingActivity ? (
                                "Loading"
                            ) : (
                                <ActivityGraph activityDatas={activityDatas} />
                            )}
                        </div>
                        <div className="bottom-container">
                            <div className="line-container">
                                {isLoadingSession ? (
                                    "Loading"
                                ) : (
                                    <SessionGraph sessionDatas={sessionDatas} />
                                )}
                            </div>
                            <div className="radar-container">
                                {isLoadingPerformance ? (
                                    "Loading"
                                ) : (
                                    <PerformanceGraph
                                        performanceDatas={performanceDatas}
                                    />
                                )}
                            </div>
                            <div className="radial-container">
                                {isLoadingUser ? (
                                    "Loading"
                                ) : (
                                    <ObjectifGraph
                                        todayScore={userMainDatas.todayScore}
                                    />
                                )}
                            </div>
                        </div>
                    </article>
                    <article className="right-container">
                        <div className="keydata-container">
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <KeyData datas={caloryDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <KeyData datas={proteinDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <KeyData datas={glucidDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <KeyData datas={lipidDatas} />
                            )}
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default User;
