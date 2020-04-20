import {
    activeBackground,
    activeBorder,
    inactiveBackground,
    inactiveBorder
} from "./constants";

const getDrumpadFromKey = function (key) {
    return Array
        .from(document.querySelectorAll(".drum-pad"))
        .find(function (drumpad) {
            return drumpad.textContent === key.toUpperCase();
        });
};

const getAudioFromKey = function (key) {
    return getDrumpadFromKey(key)
        .firstElementChild
        .nextElementSibling
};

const wasDrumpadPressed = function (key) {
    return [
        "Q", "W", "E", "A", "S", "D", "Z", "X", "C"
    ].includes(key.toUpperCase());
};

export const keyHandler = function (stateUpdater) {
    return function (event) {
        if (wasDrumpadPressed(event.key) === false) {
            return;
        }

        getAudioFromKey(event.key).play()
            .then(function () {
                const dp = getDrumpadFromKey(event.key);

                dp.style.backgroundColor = activeBackground;
                dp.style.border = activeBorder;

                return dp;
            })
            .then(function (drumpad) {
                setTimeout(function () {
                    drumpad.style.backgroundColor = inactiveBackground;
                    drumpad.style.border = inactiveBorder;
                }, 200);
            })
        stateUpdater(event.key.toUpperCase());
    };
};