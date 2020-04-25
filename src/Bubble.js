import React from "react";

export default function Slider(props) {
    const { value } = props;

    return (
        <div className="bubble" style={{ left: `${value}%` }}>
            {value}
        </div>
    );
}
