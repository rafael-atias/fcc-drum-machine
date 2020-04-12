/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Audio from "./Audio";

const audioComponent = <Audio
    src="https://www.dropbox.com/s/xmys6drdqbvlnd6/dustyroom_cartoon_swipe_high_pitched.mp3?raw=1"
    id="swipeHigh"
    data-testid="swipeHigh" />;

test("renders an audio element", function () {
    const { getByTestId, asFragment } = render(audioComponent);

    const anAudio = asFragment().firstChild;

    expect(getByTestId("swipeHigh")).toBeInTheDocument();
    expect(anAudio).not.toBe(null);
});

test("The Audio component should render the given id", function () {
    const { asFragment } = render(audioComponent);

    const anAudio = asFragment().firstChild;

    expect(anAudio.id).toBe("swipeHigh");
});

test("The Audio component should have a className clip", function () {
    const { asFragment } = render(audioComponent);

    const anAudio = asFragment().firstChild;

    expect(anAudio.className).toBe("clip");
});

test("The Audio component should render the given src value", function () {
    const { asFragment } = render(audioComponent);

    const anAudio = asFragment().firstChild;

    expect(anAudio.src).toBe("https://www.dropbox.com/s/xmys6drdqbvlnd6/dustyroom_cartoon_swipe_high_pitched.mp3?raw=1");
});