const getAudioFromClick = function (target) {
    return target.className === "drum-pad" ?
        target
            .firstElementChild
            .nextElementSibling :
        target
            .parentElement
            .firstElementChild
            .nextElementSibling;
};

const wasDrumpadClicked = function (target) {
    return target.className === "drum-pad" ||
        target.parentElement.className === "drum-pad";
};

export const clickHandler = function (stateUpdater) {
    return function (event) {
        if (wasDrumpadClicked(event.target) === false) {
            return;
        }

        getAudioFromClick(event.target).play() && stateUpdater(event.target.textContent);
    };
};