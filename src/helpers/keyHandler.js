const getAudioFromKey = function (key) {
    return Array
        .from(document.querySelectorAll(".drum-pad"))
        .find(function (drumpad) {
            return drumpad.textContent === key.toUpperCase();
        })
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

        getAudioFromKey(event.key).play();
        stateUpdater(event.key.toUpperCase());
    };
};