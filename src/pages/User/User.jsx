import React, { useEffect, useState } from "react";
import ActivityBar from "../../components/activityBar/ActivityBar";
import ConsumBar from "../../components/consumBar/ConsumBar";
import ObjectifGraph from "../../components/objectifGraph/ObjectifGraph";
import PerformanceRadar from "../../components/performanceRadar/PerformanceRadar";
import SessionLine from "../../components/sessionLine/SessionLine";
import UserInfos from "../../components/userInfos/UserInfos";
import VerticalBar from "../../components/verticalBar/VerticalBar";
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
        getMainData();
        getActivityData();
        getSessionData();
        getPerformanceData();
    }, []);

    const getMainData = async () => {
        const data = await getUserInfos(18);
        setUserMainDatas(data);
        setIsLoadingUser(false);

        createCategory(data);

        controlScoreLabel(data);
    };

    const controlScoreLabel = (data) => {
        if ("score" in data) {
            data.todayScore = data.score;
            delete data.score;
        }
    };

    const getActivityData = async () => {
        const data = await getUserActivity(12);
        setActivityDatas(data);
        setIsLoadingActivity(false);
    };

    const getSessionData = async () => {
        const data = await getUserSession(12);

        const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
        data.sessions.forEach((session) => {
            session.day = dayLetter[session.day - 1];
        });

        setSessionDatas(data);
        setIsLoadingSession(false);
    };
    const getPerformanceData = async () => {
        const data = await getUserPerformance(12);
        setPerformanceDatas(data);
        setIsLoadingPerformance(false);
    };

    class Category {
        constructor(key, label, unit, img, count, classCategory) {
            this.key = key;
            this.label = label;
            this.unit = unit;
            this.img = img;
            this.count = count;
            this.classCategory = classCategory;
        }
    }

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
                                <ActivityBar activityDatas={activityDatas} />
                            )}
                        </div>
                        <div className="bottom-container">
                            <div className="line-container">
                                {isLoadingSession ? (
                                    "Loading"
                                ) : (
                                    <SessionLine sessionDatas={sessionDatas} />
                                )}
                            </div>
                            <div className="radar-container">
                                {isLoadingPerformance ? (
                                    "Loading"
                                ) : (
                                    <PerformanceRadar
                                        performanceDatas={performanceDatas}
                                    />
                                )}
                            </div>
                            <div className="radial-container">
                                {isLoadingUser ? (
                                    "Loading"
                                ) : (
                                    <ObjectifGraph
                                        objectifDatas={userMainDatas}
                                    />
                                )}
                            </div>
                        </div>
                    </article>
                    <article className="right-container">
                        <div className="consumbar-container">
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <ConsumBar consumerData={caloryDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <ConsumBar consumerData={proteinDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <ConsumBar consumerData={glucidDatas} />
                            )}
                            {isLoadingUser ? (
                                "Loading"
                            ) : (
                                <ConsumBar consumerData={lipidDatas} />
                            )}
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default User;
