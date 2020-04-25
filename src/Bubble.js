import React from "react";

export default function Slider(props) {
    const { value, visible } = props;

    return (
        <div className="bubble" style={{ left: `${value}%`, display: visible ? '' : 'none' }}>
            {value}
        </div>
    );
}
