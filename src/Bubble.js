import React from "react";

export default function Slider(props) {
    const { value } = props;

    const position = 17;

    return (
        <div className='bubble' style={{ left: `calc(${value}% - ${position}px)` }}>
            <span>{value}</span>
        </div>
    );
}
