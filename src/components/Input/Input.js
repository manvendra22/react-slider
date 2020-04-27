import React from "react";
import PropTypes from 'prop-types';

export default function Input(props) {
    return <input {...props} />;
}

Input.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

