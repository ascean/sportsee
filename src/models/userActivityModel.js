import { Activity } from "./activityModel";

export class UserActivity {

    constructor(data) {
        this.userId = data.userId
        this.sessions = []

        data.sessions.forEach(element => {
            let session = new Activity(element)
            this.sessions.push(session)
        });
    }
}
