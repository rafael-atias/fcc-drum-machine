/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from "@testing-library/react";
import Audio from "../components/Audio";

let audioComponent;
let audioSrc;
let audioId;

beforeEach(() => {
    audioSrc = "http://localhost/static/media/sounds/dustyroom_cartoon_swipe_high_pitched.mp3";
    audioId = "swipeHigh";

    audioComponent = <Audio
        src={audioSrc}
        id={audioId}
        data-testid={audioId} />;
})

afterEach(cleanup);

test("renders an audio element", function () {
    const { getByTestId, container } = render(audioComponent);

    const anAudio = container.firstChild;

    expect(getByTestId("swipeHigh")).toBeInTheDocument();
    expect(anAudio).not.toBe(null);
});

test("The Audio component should render the given id", function () {
    const { container } = render(audioComponent);

    const anAudio = container.firstChild;

    expect(anAudio.id).toBe(audioId);
});

test("The Audio component should have a className clip", function () {
    const { container } = render(audioComponent);

    const anAudio = container.firstChild;

    expect(anAudio.className).toBe("clip");
});

test("The Audio component should render the given src value", function () {
    const { container } = render(audioComponent);

    const anAudio = container.firstChild;

    expect(anAudio.src).toBe(audioSrc);
});

test("The Audio component should be able to be played", async function () {
    // stub setup
    window.HTMLAudioElement.prototype.play = function () {
        return Promise.resolve();
    }

    try {
        const { getByTestId } = render(audioComponent);

        let played = false;

        await getByTestId(audioId).play()
            .then(function () {
                played = true;
            });

        await expect(played).toBe(true);

    } finally {
        // stub teardown
        window.HTMLAudioElement.prototype.play = undefined;
    }
});