import React from "react";

export default function Slider(props) {
    const { value, visible } = props;

    const position = 10;

    return (
        <div className="bubble" style={{ left: `calc(${value}% - ${position}px)`, display: visible ? null : 'none' }}>
            <span>{value}</span>
        </div>
    );
}
