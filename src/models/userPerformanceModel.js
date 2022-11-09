/**
 * Model for USER_PERFOMANCE datas
 * called in USER
 * calling PerformanceData model
 */
export class UserPerformance {
    constructor(data) {
        this.userId = data.userId;

        let kindArray = Object.values(data.kind);
        this.kind = kindArray.map((element) => ((element + '').charAt(0).toUpperCase() + element.substr(1)))
        
        this.data = data.data.map((element) => {
            return new PerformanceData(element)
        })
    } 
}

export class PerformanceData {
    constructor(data) {
        this.value = data.value;
        this.kind = data.kind
    }
}
