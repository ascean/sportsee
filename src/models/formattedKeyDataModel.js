import PropTypes from "prop-types";

export class FormattedKeyDataModel {
    /**
     * Format datas from keyData bar, 
     * called in USER
     * @param {string} key key of element
     * @param {string} label label of element
     * @param {string} unit unit of element
     * @param {string} img  image source
     * @param {number} count number of element 
     * @param {string} classIcon class name for icon
     * @example
     * { "key" : "calory", "label" : "calories", "unit" : "kCal", "img" : "/icons/calorie.png", "count" : 1930, "classIcon" : "calory-icon" }
     * 
     */
    constructor(key, label, unit, img, count, classIcon) {
        this.key    = key;
        this.label  = label;
        this.unit   = unit;
        this.img    = img;
        this.count  = count;
        this.classIcon = classIcon;
    }
}

FormattedKeyDataModel.propTypes = {
    key:    PropTypes.string,
    label:  PropTypes.string,
    unit:   PropTypes.string,
    img:    PropTypes.string,
    count:  PropTypes.number,
    classIcon: PropTypes.string,
}