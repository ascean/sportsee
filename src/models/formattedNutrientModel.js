import PropTypes from "prop-types";

// Format datas from keyData bar, 
export class FormattedNutrientModel {
    constructor(key, label, unit, img, count, classIcon) {
        this.key    = key;
        this.label  = label;
        this.unit   = unit;
        this.img    = img;
        this.count  = count;
        this.classIcon = classIcon;
    }
}

FormattedNutrientModel.propTypes = {
    key:    PropTypes.string,
    label:  PropTypes.string,
    unit:   PropTypes.string,
    img:    PropTypes.string,
    count:  PropTypes.number,
    classIcon: PropTypes.string,
}