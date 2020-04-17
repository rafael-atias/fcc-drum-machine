import React from "react";

export default function Drumpad(props) {
    return (
        <div
            id={props.id}
            data-testid={props.id}
            className="drum-pad">
            <p>{props.textContent}</p>
            {props.audio}
        </div>
    );
}