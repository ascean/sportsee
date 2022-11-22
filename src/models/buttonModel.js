import PropTypes from "prop-types";

// Model for Button
export class ButtonModel {
    constructor(alt, img) {
        this.alt = alt;
        this.img = img;
    }
}

ButtonModel.propTypes = {
    alt: PropTypes.string,
    img: PropTypes.string,
};
