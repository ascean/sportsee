import React from "react";
import ActivityBar from "../../components/activityBar/ActivityBar";
import ConsumBar from "../../components/consumBar/ConsumBar";
import PerformanceRadar from "../../components/performanceRadar/PerformanceRadar";
import SessionLine from "../../components/sessionLine/SessionLine";
import VerticalBar from "../../components/verticalBar/VerticalBar";
import ObjectifGraph from "../../components/objectifGraph/ObjectifGraph";
var datasUser = require("../../assets/datas/data");

// const USER_AVERAGE_SESSIONS = datasUser.USER_AVERAGE_SESSIONS;
const USER_ID = 12;

const USER_MAIN_DATA = datasUser.USER_MAIN_DATA.filter(
    (element) => element.id === USER_ID
);
const USER_SESSION = datasUser.USER_AVERAGE_SESSIONS.filter(
    (element) => element.userId === USER_ID
);
const USER_ACTIVITY = datasUser.USER_ACTIVITY.filter(
    (element) => element.userId === USER_ID
);
const USER_PERFORMANCE = datasUser.USER_PERFORMANCE.filter(
    (element) => element.userId === USER_ID
);

const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
USER_SESSION[0].sessions.forEach((data) => {
    data.day = dayLetter[data.day-1];
});


    
const User = () => {

    const constructCategoryDatas = (i) => {
        let objectCategory = {}
        let countDatas = Object.values(USER_MAIN_DATA[0].keyData)
        switch (i) {
            case 0:
                objectCategory= {
                    "key": "calorie",
                    "label":"Calories",
                    "unit": "kCal",
                    "img": `/icons/calorie.png`,
                    "value": countDatas[i],
                    "class": "calorie-icon"
                }
                break;
            case 1:
                objectCategory= {
                    "key": "protein",
                    "label":"Protéines",
                    "unit": "g",
                    "img": `/icons/protein.png`,
                    "value": countDatas[i],
                    "class": "protein-icon"
                }
                break;
            case 2:
                objectCategory= {
                    "key": "carbohydrate",
                    "label":"Glucides",
                    "unit": "g",
                    "img": `/icons/carbohydrate.png`,
                    "value": countDatas[i],
                    "class": "glucid-icon"
                }
                break;
            case 3:
                objectCategory= {
                    "key": "calorie",
                    "label":"Lipides",
                    "unit": "g",
                    "img": `/icons/lipid.png`,
                    "value": countDatas[i],
                    "class": "lipid-icon"
                }
                break;
        
            default:
                break;
        }
        return objectCategory
    }
    
    return (
            <main>
                <VerticalBar />
                <div className="main-content">
                    <section className="user-infos">
                        <h1>
                            <span>Bonjour </span>
                            <span className="red">
                                {USER_MAIN_DATA[0].userInfos.firstName}
                            </span>
                        </h1>
                        <p className="message">
                            Félicitations ! Vous avez explosé vos objectifs hier
                            👏
                        </p>
                    </section>
                    <section className="recharts-container">
                        <article className="left-container">
                            <div className="activity-container">
                                
                                <ActivityBar activityDatas={USER_ACTIVITY} />
                            </div>
                            <div className="bottom-container">
                                <div className="line-container">
                                    <SessionLine sessionDatas={USER_SESSION} />
                                </div>
                                <div className="radar-container">
                                    <PerformanceRadar
                                        performanceDatas={USER_PERFORMANCE[0]}
                                    />
                                </div>
                                <div className="radial-container">
                                    <ObjectifGraph
                                        objectifDatas={USER_MAIN_DATA[0]}
                                    />
                                </div>
                            </div>
                        </article>
                    <article className="right-container">
                        <div className="consumbar-container">
                            
                            <ConsumBar consumerData={constructCategoryDatas(0)}/>
                            <ConsumBar consumerData={constructCategoryDatas(1)}/>
                            <ConsumBar consumerData={constructCategoryDatas(2)}/>
                            <ConsumBar consumerData={constructCategoryDatas(3)}/>
                    </div>
                        </article>
                    </section>
                </div>
            </main>
    );
};

export default User;
