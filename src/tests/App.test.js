/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';
import Drumpad from "../components/Drumpad";
import drumpadData from "../helpers/drumpadData";

test('renders a #drum-machine element', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("drum-machine")).toBeInTheDocument();
});

test("renders a #display element that is a child of #drum-machine", function () {
  const { getByTestId } = render(<App />);

  expect(getByTestId("display")).toBeInTheDocument();
});

test("App contains 9 drum pads", function () {
  const { getByText } = render(<App />);

  expect(getByText("Q")).toBeInTheDocument();
  expect(getByText("W")).toBeInTheDocument();
  expect(getByText("E")).toBeInTheDocument();
  expect(getByText("A")).toBeInTheDocument();
  expect(getByText("S")).toBeInTheDocument();
  expect(getByText("D")).toBeInTheDocument();
  expect(getByText("Z")).toBeInTheDocument();
  expect(getByText("X")).toBeInTheDocument();
  expect(getByText("C")).toBeInTheDocument();
});

test("When a drum pad is clicked, the #display element should show the letter contained in the clicked drum pad", function () {
  //setting up the stub
  window.HTMLAudioElement.prototype.play = function () {
    return Promise.resolve();
  }

  try {
    const { getByTestId } = render(<App />);

    // text content of elements
    const shText = getByTestId("swipeHigh").textContent;
    const dchText = getByTestId("dogConfusedHuh").textContent;

    // first click
    fireEvent.click(getByTestId("swipeHigh"));

    expect(getByTestId("display").textContent).toBe(shText);

    // with the second click, the content should be updated
    fireEvent.click(getByTestId("dogConfusedHuh"));

    expect(getByTestId("display").textContent).toBe(dchText);
  } finally {
    //tear down the stub
    window.HTMLAudioElement.prototype.play = undefined;
  }
});

test("When the p element child of a drum-pad is clicked, the #display element should show the letter contained in the clicked drum pad", function () {
  // setting up the stub
  window.HTMLAudioElement.prototype.play = function () {
    return Promise.resolve();
  }

  try {
    const { getByTestId } = render(<App />);

    // text content of elements
    const shText = getByTestId("swipeHigh").textContent;
    const dchText = getByTestId("dogConfusedHuh").textContent;

    // first click
    fireEvent.click(getByTestId("swipeHigh").firstElementChild);

    expect(getByTestId("display").textContent).toBe(shText);

    // with the second click, the display content should be updated
    fireEvent.click(getByTestId("dogConfusedHuh").firstElementChild);

    expect(getByTestId("display").textContent).toBe(dchText);
  } finally {
    //tear down the stub
    window.HTMLAudioElement.prototype.play = undefined;
  }
});

test("When the user presses a key with the same letter of a drum pad, the #display element should show the letter contained in the pressed key", function () {
  // setting up the stub
  window.HTMLAudioElement.prototype.play = function () {
    return Promise.resolve();
  }

  try {
    const { getByTestId } = render(<App />);

    // text content of elements
    const shText = getByTestId("swipeHigh").textContent; // q
    const dchText = getByTestId("dogConfusedHuh").textContent; // a

    // first key event
    fireEvent.keyUp(getByTestId("swipeHigh").firstElementChild, { key: "q" });

    expect(getByTestId("display").textContent).toBe(shText);

    // with the second key event, the display content should be updated
    fireEvent.keyUp(getByTestId("dogConfusedHuh").firstElementChild, { key: "a" });

    expect(getByTestId("display").textContent).toBe(dchText);
  } finally {
    //tear down the stub
    window.HTMLAudioElement.prototype.play = undefined;
  }
});