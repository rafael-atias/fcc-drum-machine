/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Drumpad from "../components/Drumpad";
import Audio from "../components/Audio";

let audioComponent;
let DP;
let dpId;
let textContent;
let src;

// helpers
const getDrumpadAudio = function (queryFn, drumpadId) {
    return queryFn(drumpadId).children[1];
};

beforeEach(() => {
    dpId = "swipeHigh";
    textContent = "Q";
    src = "http://localhost/static/media/sounds/dustyroom_cartoon_swipe_high_pitched.mp3";

    audioComponent = <Audio
        id={textContent}
        data-testid={textContent}
        src={src} />
    DP = <Drumpad
        id={dpId}
        textContent={textContent}
        audio={audioComponent}
    />;
});

afterEach(cleanup);

test("Drumpad should render a div element", function () {
    const { getByText, container } = render(DP);

    const aDrumpad = container.firstChild;

    expect(getByText("Q")).toBeInTheDocument();
    expect(aDrumpad).not.toBe(null);
    expect(aDrumpad.nodeName.toLowerCase()).toBe("div");
});

test("The Drumpad component should render the given id", function () {
    const { getByTestId } = render(DP);

    const aDrumpad = getByTestId(dpId);

    expect(aDrumpad.id).toBe(dpId);
});

test("The Drumpad component should have a className drump-pad", function () {
    const { getByTestId } = render(DP);

    const aDrumpad = getByTestId(dpId);

    expect(aDrumpad.className).toBe("drum-pad");
});

test("a Drumpad must render an audio element", function () {
    const { getByTestId } = render(DP);

    const anAudio = getDrumpadAudio(getByTestId, dpId);

    expect(anAudio.nodeName.toLowerCase()).toBe("audio");
});

test("The Drumpad's textContent and the audio's id should be the same value", function () {
    const { container, getByTestId } = render(DP);

    const aDrumpad = container.firstChild;
    const anAudio = getDrumpadAudio(getByTestId, dpId);

    expect(aDrumpad.textContent).toBe(anAudio.id);
});