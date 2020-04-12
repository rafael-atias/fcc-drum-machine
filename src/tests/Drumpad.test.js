/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Drumpad from "../components/Drumpad";

const DP = <Drumpad
    id="swipeHigh"
    textContent="Q"
    audioSrc="https://www.dropbox.com/s/xmys6drdqbvlnd6/dustyroom_cartoon_swipe_high_pitched.mp3?raw=1"
/>;

test("Drumpad should render a div element", function () {
    const { getByText, asFragment } = render(DP);

    const aDrumpad = asFragment().firstChild;

    expect(getByText("Q")).toBeInTheDocument();
    expect(aDrumpad).not.toBe(null);
    expect(aDrumpad.nodeName.toLowerCase()).toBe("div");
});

test("The Drumpad component should render the given id", function () {
    const { asFragment } = render(DP);

    const aDrumpad = asFragment().firstChild;

    expect(aDrumpad.id).toBe("swipeHigh");
});

test("The Drumpad component should have a className clip", function () {
    const { asFragment } = render(DP);

    const aDrumpad = asFragment().firstChild;

    expect(aDrumpad.className).toBe("drum-pad");
});

test("a Drumpad must render an audio element", function () {
    const { asFragment } = render(DP);

    const aDrumpad = asFragment().firstChild;
    const anAudio = aDrumpad.children[1];

    expect(anAudio.nodeName.toLowerCase()).toBe("audio");
});

test("The Drumpad's textContent and the audio's id should be the same value", function () {
    const { asFragment } = render(DP);

    const aDrumpad = asFragment().firstChild;
    const anAudio = aDrumpad.children[1];

    expect(aDrumpad.textContent).toBe(anAudio.id);
});

test("The Drumpad component should have an audioSrc property that is not rendered", function () {
    const { getByText } = render(DP);

    expect(getByText("Q")).not.toHaveAttribute("audioSrc");
});

test("The Drumpad component should pass in the an audioSrc property to the audio element", function () {
    const url = "https://www.google.com/";
    const { asFragment } = render(<Drumpad
        id="hello world"
        textContent="hello world"
        audioSrc={url}
    />);

    const aDrumpad = asFragment().firstChild;
    const anAudio = aDrumpad.children[1];

    expect(anAudio.src).toBe(url);
});