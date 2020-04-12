/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

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

// test("App contains 3 drumpad rows", function () {
//   const { getByTestId } = render(<App />);

//   const firstRow = getByTestId("row0");
//   const secondRow = getByTestId("row1");
//   const thirdRow = getByTestId("row2");

//   expect(firstRow.className).toBe("row");
//   expect(secondRow.className).toBe("row");
//   expect(thirdRow.className).toBe("row");

// });