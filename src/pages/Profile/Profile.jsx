import React, { useEffect, useState } from "react";

import UserInfos from "../../components/userInfos/UserInfos";
import VerticalBar from "../../components/verticalBar/VerticalBar";
import Nutrient from "../../components/nutrient/Nutrient";
import NoData from "../../components/noData/NoData";

//Models
import { FormattedNutrientModel } from "../../models/formattedNutrientModel";
import { UserActivityModel } from "../../models/userActivityModel";
import { UserMainDataModel } from "../../models/userMainDataModel";
import { UserAverageSessionModel } from "../../models/userAverageSessionModel";
import { UserPerformanceModel } from "../../models/userPerformanceModel";

//API and MOCK
import {
    getUserInfos,
    getUserActivity,
    getUserSession,
    getUserPerformance,
} from "../../services/servicesAPI";
import {
    getUserActivityByMock,
    getUserInfosByMock,
    getUserPerformanceByMock,
    getUserSessionByMock
} from "../../services/servicesMock";

//Graphs
import ObjectifGraph from "../../components/objectif/ObjectifGraph";
import PerformanceGraph from "../../components/performance/PerformanceGraph";
import SessionGraph from "../../components/session/SessionGraph";
import ActivityGraph from "../../components/activity/ActivityGraph";

//Icons
import caloryIcon from '../../components/nutrient/assets/icons/calory.png'
import proteinIcon from '../../components/nutrient/assets/icons/protein.png'
import carbohydrateIcon from '../../components/nutrient/assets/icons/carbohydrate.png'
import lipidIcon from '../../components/nutrient/assets/icons/lipid.png'

/**
 * Render the main page (profil page)
 * @returns {ReactElement}
 */
const Profile = () => {
    const [isErrorUser, setIsErrorUser]                 = useState(false);
    const [isErrorActivity, setIsErrorActivity]         = useState(false);
    const [isErrorSession, setIsErrorSession]           = useState(false);
    const [isErrorPerformance, setIsErrorPerformance]   = useState(false);

    const [isLoadingUser, setIsLoadingUser]             = useState(true);
    const [isLoadingActivity, setIsLoadingActivity]     = useState(true);
    const [isLoadingSession, setIsLoadingSession]       = useState(true);
    const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);

    const [userMainDatas, setUserMainDatas]         = useState(null);
    const [activityDatas, setActivityDatas]         = useState(null);
    const [sessionDatas, setSessionDatas]           = useState(null);
    const [performanceDatas, setPerformanceDatas]   = useState(null);

    const [caloryDatas, setCaloryDatas]     = useState(null);
    const [proteinDatas, setProteinDatas]   = useState(null);
    const [glucidDatas, setGlucidDatas]     = useState(null);
    const [lipidDatas, setLipidDatas]       = useState(null);
    

    useEffect(() => {
        //URL datas gestion
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        //default value = 12 if no user_id in URL
        let userId = params.user_id ?? 12;
        userId = parseInt(userId)

        if (params.from === "mock") {
            getMainDataByMock(userId)
            getActivityDataByMock(userId)
            getSessionDataByMock(userId)
            getPerformanceDataByMock(userId)
        } else {
            getMainDataAPI(userId)
            getActivityDataAPI(userId)
            getSessionDataAPI(userId);
            getPerformanceDataAPI(userId);
        } 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //********************USER_MAIN_DATA***********************
    /**
     * Process USER_MAIN_DATA if defined
     * @param {Object} datas 
     * @param {number} data.id User code
     * @param {UserInfosModel} data.userInfos User informations (firstname, lastname, age)
     * @param {number} data.todayScore User objectif score
     * @param {NutrientModel} data.keyData User datas consum (calorie, protein, glucid, lipid)
     * @example
     * {"id": 12,
        "userInfos": {"firstName": "Karl", "lastName": "Dovineau", "age": 31},
        "todayScore": 0.12,
        "keyData": {"calorieCount": 1930, "proteinCount": 155, "carbohydrateCount": 290, "lipidCount": 50 }
        }
     */
    const processMainData = (datas) => {
        if (!datas) {
            setIsErrorUser(true);
        } else {
            const mainData = new UserMainDataModel(datas);
            setUserMainDatas(mainData);
            setIsLoadingUser(false);
            formatNutrientData(mainData.keyData);
            setIsErrorUser(false);
        }
    }
    
    /**
     * get datas from mock json file /  USER_MAIN_DATA section
     * @param {integer} userId User code
     */
    const getMainDataByMock = (userId) => {
        const datas = getUserInfosByMock(userId);
        processMainData(datas)
    };
    
    /**
     * get datas from API /  USER_MAIN_DATA section
     * @param {integer} userId User code
     */
    const getMainDataAPI = async (userId) => {
        const dataFromFetch = await getUserInfos(userId);
        processMainData(dataFromFetch)
    };

    //********************USER_ACTIVITY***********************
    
    /**
     * Process USER_ACTIVITY if defined
     * @param {Object} data USER_ACTIVITY datas
     * @param {number} data.userId User code
     * @param {Activity} data.sessions User datas (kilogram and calories)
     * @example
     * { userId : 12, sessions [ { day : '2020-07-01', kilogram : 80, calories : 240 }, { ... } ... ]
     */
    const processActivityData = (datas) => {
        if (!datas) {
            setIsErrorActivity(true);
        } else {
            const activityData = new UserActivityModel(datas);
            setActivityDatas(activityData.sessions);
            setIsLoadingActivity(false);
            setIsErrorActivity(false);
        }
    }
    
    /**
     * get datas from mock json file /  USER_ACTIVITY section
     * @param {integer} userId User code
     */
     const getActivityDataByMock = (userId) => {
        const datas = getUserActivityByMock(userId);
        processActivityData(datas)
    };

    /**
     * get datas from API /  USER_ACTIVITY section
     * @param {integer} userId User code
     */
    const getActivityDataAPI = async (userId) => {
        const dataFromFetch = await getUserActivity(userId);
        processActivityData(dataFromFetch)
    };

    
    //********************USER_AVERAGE_SESSIONS***********************
    /**
     * Process USER_AVERAGE_SESSIONS if defined
     * @param {Object} data USER_AVERAGE_SESSIONS
     * @param {number} data.userId User code
     * @param {Array.<{day:string, sessionsLength:number}>} data.sessions user data sessions
     * @example
     * { userId : 12 , [{ "day" : "M", "sessionLength": 23 }, { }, { } ...]}
     */
    const processSessionData = (datas) => {
        if (!datas) {
            setIsErrorSession(true);
        } else {
            const sessionData = new UserAverageSessionModel(datas);

            const formatedSessionData = formatSessionData(sessionData.sessions)
            setSessionDatas(formatedSessionData);
            
            setIsLoadingSession(false);
            setIsErrorSession(false);
        }
    }

    /**
     * get datas from mock json file / USER_AVERAGE_SESSIONS section
     * @param {integer} userId User code
     */
     const getSessionDataByMock = (userId) => {
        const datas = getUserSessionByMock(userId);
        processSessionData(datas)
    };

    /**
     * get datas from API / USER_AVERAGE_SESSIONS section
     * @param {integer} userId User code
     */
    const getSessionDataAPI = async (userId) => {
        const dataFromFetch = await getUserSession(userId);
        processSessionData(dataFromFetch)
    };

    //********************USER_PERFORMANCE***********************

     /**
     * Process USER_PERFORMANCE if defined
     * @param {Object} data
     * @param {string} data.userId User code
     * @param {Object.<number, string>} data.kind kind of performance
     * @param {PerformanceDataModel} data.data performance datas
     * @example
     * userId : 12
     * kind : { 1 : "cardio", 2 : "energy" ...}
     * data : [{value: 80, kind: 1}, {value: 120, kind: 2}...]
     */
    const processPerformanceData = (datas) => {
        if (!datas) {
            setIsErrorPerformance(true);
        } else {
            const performanceData = new UserPerformanceModel(datas);

            const formatedPerformanceData = changeKindLabel(performanceData)
            setPerformanceDatas(formatedPerformanceData);
            
            setIsLoadingPerformance(false);
            setIsErrorPerformance(false);
        }
    }

    /**
     * get datas from mock json file / USER_AVERAGE_SESSIONS section
     * @param {integer} userId User code
     */
     const getPerformanceDataByMock = (userId) => {
        const datas = getUserPerformanceByMock(userId);
        processPerformanceData(datas)
    };

    /**
     * get datas from API / USER_AVERAGE_SESSIONS section
     * @param {integer} userId User code
     */
    const getPerformanceDataAPI = async (userId) => {
        const dataFromFetch = await getUserPerformance(userId);
        processPerformanceData(dataFromFetch)
    };

    //********************FORMAT DATA METHODS***********************

    /**
     * Format session datas by change day from number to letter (ex : 1 -> L)
     * @param {array} dataSession 
     * @returns {array} dataSession
     */
    const formatSessionData = (dataSession) => {
        const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
        for (let i = 0; i < dataSession.length; i++) {
            const element   = dataSession[i];
            element.day     = dayLetter[i];
        }
        return dataSession
    }

    /**
     * Update kind in performance datas with french terms
     * @param {Object} performanceData 
     * @returns {Object} performanceData
     */
     const changeKindLabel = (performanceData) => {
        let kindTranslated = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
        for (let i = 0; i < kindTranslated.length; i++) {
            performanceData.kind[i + 1] = kindTranslated[i]
        }
        return performanceData
    }

    /**
     * Format USER_MAIN_DATA.keyData datas (calory, protein...) with informations to display
     * @param {Object} data USER_MAIN_DATAS.keyData
     * @param {string} data.key
     * @param {string} data.label
     * @param {string} data.unit
     * @param {string} data.img
     * @param {number} data.count
     * @param {string} data.classIcon
     */
    const formatNutrientData = (data) => {
        setCaloryDatas(
            new FormattedNutrientModel(
                "calorie", "Calories", "kCal", caloryIcon, data.calorieCount, "calorie-icon"
            )
        );
        setProteinDatas(
            new FormattedNutrientModel(
                "protein", "Protéines", "g", proteinIcon, data.proteinCount, "protein-icon"
            )
        );
        setGlucidDatas(
            new FormattedNutrientModel(
                "carbohydrate", "Glucides", "g", carbohydrateIcon, data.carbohydrateCount, "glucid-icon"
            )
        );
        setLipidDatas(
            new FormattedNutrientModel(
                "lipid", "Lipides", "g", lipidIcon, data.lipidCount, "lipid-icon"
            )
        );
    };

    
    return (
        <main>
            <VerticalBar />
            <div className="main-content">
                <section className="userinfos-container">
                    {isErrorUser ? (
                        <NoData />
                    ) : isLoadingUser ? (
                        "Loading"
                    ) : (
                        <UserInfos
                            firstName={userMainDatas.userInfos.firstName}
                        />
                    )}
                </section>

                <section className="recharts-container">
                    <article className="left-container">
                        <div className="activity-container">
                            {isErrorActivity ? (
                                <NoData />
                            ) : isLoadingActivity ? (
                                "Loading"
                            ) : (
                                <ActivityGraph activityDatas={activityDatas} />
                            )}
                        </div>
                        <div className="bottom-container">
                            <div className="session-container">
                                {isErrorSession ? (
                                    <NoData />
                                ) : isLoadingSession ? (
                                    "Loading"
                                ) : (
                                    <SessionGraph sessionDatas={sessionDatas} />
                                )}
                            </div>
                            <div className="radar-container">
                                {isErrorPerformance ? (
                                    <NoData />
                                ) : isLoadingPerformance ? (
                                    "Loading"
                                ) : (
                                    <PerformanceGraph
                                        performanceDatas={performanceDatas}
                                    />
                                )}
                            </div>
                            <div className="radial-container">
                                {isErrorUser ? (
                                    <NoData />
                                ) : isLoadingUser ? (
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
                        {isErrorUser ? (
                            <NoData />
                        ) : isLoadingUser ? (
                            "Loading"
                        ) : (
                            <div className="nutrient-data-container">
                                <Nutrient datas={caloryDatas} />
                                <Nutrient datas={proteinDatas} />
                                <Nutrient datas={glucidDatas} />
                                <Nutrient datas={lipidDatas} />
                            </div>
                        )}
                    </article>
                </section>
            </div>
        </main>
    );
};

export default Profile;
