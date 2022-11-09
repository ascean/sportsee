import PropTypes from "prop-types";

/**
 * Format USER_MAIN_DATA.keyData datas (calory, protein...) in order to display
 * called in USER
 */
export class FormattedKeyData {
    
    constructor(key, label, unit, img, count, classIcon) {
        this.key    = key;
        this.label  = label;
        this.unit   = unit;
        this.img    = img;
        this.count  = count;
        this.classIcon = classIcon;
    }
}

FormattedKeyData.propTypes = {
    key:    PropTypes.string,
    label:  PropTypes.string,
    unit:   PropTypes.string,
    img:    PropTypes.string,
    count:  PropTypes.number,
    classIcon: PropTypes.string,
}