import { KeyData } from "./keyDataModel";
import { UserInfos } from "./userInfosModel";

export class UserMainData {

    constructor(data) {
        this.id = data.id
        if (data.score) {
            this.todayScore = data.score;
        }
        if (data.todayScore) {
            this.todayScore = data.todayScore;
        }
        this.userInfos = new UserInfos(data.userInfos)
        this.keyData = new KeyData(data.keyData)
    }

}
