import PropTypes from "prop-types";

// Model for performanceGraph
export class UserPerformanceModel {
    constructor(data) {
        this.userId = data.userId;
        this.kind = data.kind
        this.data = data.data.map((element) => {
            const performanceDataModel = new PerformanceDataModel(element)
            return performanceDataModel            
        })
    } 
}

UserPerformanceModel.propTypes = {
    userId: PropTypes.number,
    kind:   PropTypes.object,
    data:   PropTypes.array,
};

class PerformanceDataModel {
    constructor(data) {
        this.value = data.value;
        this.kind = data.kind
        this.label = data.kind
    }
}

UserPerformanceModel.propTypes = {
    value:  PropTypes.number,
    kind:   PropTypes.string,
    label:  PropTypes.string,
};