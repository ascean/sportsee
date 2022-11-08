import React, { useEffect, useState } from "react";
import Activity from "../../components/activity/Activity";
import Consum from "../../components/consum/Consum";
import Objectif from "../../components/objectif/Objectif";
import Performance from "../../components/performance/Performance";
import Session from "../../components/session/Session";
import UserInfos from "../../components/userInfos/UserInfos";
import VerticalBar from "../../components/verticalBar/VerticalBar";
import { Category } from "../../models/categoryModel";
import { UserActivity } from "../../models/userActivityModel";
import { UserMainData } from "../../models/userMainDataModel";
import { UserAverageSession } from "../../models/userAverageSessionModel";
import {
    getUserInfos,
    getUserActivity,
    getUserSession,
    getUserPerformance,
} from "../../services/services";

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
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          });
        let value = params.user_id ?? 12
        getMainData(value);
        getActivityData(value);
        getSessionData(value);
        getPerformanceData(value);
    }, []);

    const getMainData = async (userId) => {
        const dataFromFetch = await getUserInfos(userId);
        const data = new UserMainData(dataFromFetch)
        setUserMainDatas(data);
        setIsLoadingUser(false);
        createCategory(data);
    };


    const getActivityData = async (userId) => {
        const dataFromFetch = await getUserActivity(userId);
        const data = new UserActivity(dataFromFetch)
        setActivityDatas(data);
        setIsLoadingActivity(false);
    };

    const getSessionData = async (userId) => {
        const dataFromFetch = await getUserSession(userId);
        const data = new UserAverageSession(dataFromFetch)
        setSessionDatas(data);
        setIsLoadingSession(false);
    };

    const getPerformanceData = async (userId) => {
        const dataFromFetch = await getUserPerformance(userId);
        console.log(dataFromFetch);

        setPerformanceDatas(dataFromFetch);
        setIsLoadingPerformance(false);
    };

    const createCategory = (data) => {
        setCaloryDatas(
            new Category(
                "calorie",
                "Calories",
                "kCal",
                `/icons/calorie.png`,
                data.keyData.calorieCount,
                "calorie-icon"
            )
        );
        setProteinDatas(
            new Category(
                "protein",
                "Protéines",
                "g",
                `/icons/protein.png`,
                data.keyData.proteinCount,
                "protein-icon"
            )
        );
        setGlucidDatas(
            new Category(
                "carbohydrate",
                "Glucides",
                "g",
                `/icons/carbohydrate.png`,
                data.keyData.carbohydrateCount,
                "glucid-icon"
            )
        );
        setLipidDatas(
            new Category(
                "lipid",
                "Lipides",
                "g",
                `/icons/lipid.png`,
                data.keyData.lipidCount,
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
                    <UserInfos userDatas={userMainDatas} />
                )}

                <section className="recharts-container">
                    <article className="left-container">
                        <div className="activity-container">
                            {isLoadingActivity ? (
                                "Loading"
                            ) : (
                                <Activity activityDatas={activityDatas} />
                            )}
                        </div>
                        <div className="bottom-container">
                            <div className="line-container">
                                {isLoadingSession ? (
                                    "Loading"
                                ) : (
                                    <Session sessionDatas={sessionDatas} />
                                )}
                            </div>
                            <div className="radar-container">
                                {isLoadingPerformance ? (
                                    "Loading"
                                ) : (
                                    <Performance
                                        performanceDatas={performanceDatas}
                                    />
                                )}
                            </div>
                            <div className="radial-container">
                                {isLoadingUser ? (
                                    "Loading"
                                ) : (
                                    <Objectif
                                        objectifDatas={userMainDatas}
                                    />
                                )}
                            </div>
                        </div>
                    </article>
                    <article className="right-container">
                        <div className="consum-container">
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <Consum consumerData={caloryDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <Consum consumerData={proteinDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <Consum consumerData={glucidDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <Consum consumerData={lipidDatas} />
                            )}
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default User;
