import React from "react";

export default function Slider(props) {
    const { className, ...otherProps } = props;
    return <input type="range" className={`slider ${className}`} {...otherProps} />;
}
