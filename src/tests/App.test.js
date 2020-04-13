/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';

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
  const { getByTestId } = render(<App />);

  const click = new MouseEvent("click", { bubbles: true, cancelable: false });

  // text content of elements
  const shText = getByTestId("swipeHigh").textContent;
  const dchText = getByTestId("dogConfusedHuh").textContent;

  // first click
  fireEvent(getByTestId("swipeHigh"), click);

  expect(getByTestId("display").textContent).toBe(shText);

  // with the second click, the content should be updated
  fireEvent(getByTestId("dogConfusedHuh"), click);

  expect(getByTestId("display").textContent).toBe(dchText);
});

test("When the p element child of a drum-pad is clicked, the #display element should show the letter contained in the clicked drum pad", function () {
  const { getByTestId } = render(<App />);

  const click = new MouseEvent("click", { bubbles: true, cancelable: false });

  // text content of elements
  const shText = getByTestId("swipeHigh").textContent;
  const dchText = getByTestId("dogConfusedHuh").textContent;

  // first click
  fireEvent(getByTestId("swipeHigh").firstElementChild, click);

  expect(getByTestId("display").textContent).toBe(shText);

  // with the second click, the display content should be updated
  fireEvent(getByTestId("dogConfusedHuh").firstElementChild, click);

  expect(getByTestId("display").textContent).toBe(dchText);
});