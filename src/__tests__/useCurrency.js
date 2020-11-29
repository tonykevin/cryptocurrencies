import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { currencies } from "../__mocks__";

import { Form } from "../components";

test("<useCurrency />", () => {
  render(<Form />);

  // Check number of options
  const currencySelect = screen.getByTestId("currencySelect");
  expect(currencySelect.children.length).toEqual(currencies.length + 1);
});
