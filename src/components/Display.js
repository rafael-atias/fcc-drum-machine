import React from "react";

export default function Display(props) {
    return (
        <div data-testid="display" id="display">
            <p>{props.text}</p>
        </div>
    );
}