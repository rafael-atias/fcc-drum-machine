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

        // we store the event target here so it is available
        // inside the async function
        const target = event.target;

        getAudioFromClick(target).play()
            .then(function () {
                const dp = getAudioFromClick(target).parentElement;

                dp.style.backgroundColor = "#c3621d";
                dp.style.border = "thin solid #f95a28";

                return dp;
            })
            .then(function (drumpad) {
                setTimeout(function () {
                    drumpad.style.backgroundColor = "cadetblue";
                    drumpad.style.border = "thin solid #457173";
                }, 200);
            });
        stateUpdater(event.target.textContent);
    };
};