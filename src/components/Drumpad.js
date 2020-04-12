import React from "react";
import Audio from "./Audio";

export default function Drumpad(props) {
    return (
        <div
            id={props.id}
            data-testid={props.id}
            className="drum-pad">
            <p>{props.textContent}</p>
            <Audio
                src={props.audioSrc}
                id={props.textContent}
                data-testid={props.textContent}
            />
        </div>
    );
}