export class UserPerformanceModel {
    /**
     * Model for USER_PERFOMANCE datas
     * called in USER
     * calling PerformanceDataModel
     * @param {Object} data
     * @param {string} data.userId User code
     * @param {Object.<number, string>} data.kind kind of performance
     * @param {PerformanceDataModel} data.data performance datas
     */
    constructor(data) {
        this.userId = data.userId;

        let kindArray = Object.values(data.kind);
        this.kind = kindArray.map((element) => ((element + '').charAt(0).toUpperCase() + element.substr(1)))
        
        this.data = data.data.map((element) => {
            return new PerformanceDataModel(element)
        })
    } 
}

export class PerformanceDataModel {
    /**
     * Create new format performance datas
     * @param {Object} data 
     * @param {string} data.value
     * @param {number} data.kind
     */
    constructor(data) {
        this.value = data.value;
        this.kind = data.kind
    }
}
