import { createStore } from "redux";

// the action
const ACTIVATE = "ACTIVATE";

// the action creator
export const activateDrumpad = function (text) {
    return {
        type: ACTIVATE,
        drumpad: text,
    };
};

// the reducer
export const reducer = function (state = "", action) {
    const response = {
        ACTIVATE: function () {
            return `${action.drumpad}`;
        }
    };

    return response[action.type] !== undefined ?
        response[action.type]() :
        state;
};

export const store = createStore(reducer);