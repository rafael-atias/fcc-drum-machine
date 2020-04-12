import React from "react";

export default function Audio(props) {
    return (
        <audio
            className="clip"
            src={props.src}
            id={props.id}
            data-testid={props.id}
        ></audio>
    );
}