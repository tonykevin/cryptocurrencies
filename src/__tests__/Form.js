import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import { cryptoList, currencies } from "../__mocks__";
import { Form } from "../components";

const axiosMock = axios;

test("<Form />", async () => {
  //Consume false data
  axiosMock.get = jest.fn().mockResolvedValue({
    data: cryptoList,
  });

  render(<Form />);

  // Check number of options for currencies
  const currencySelect = screen.getByTestId("currencySelect");
  expect(currencySelect.children.length).toEqual(currencies.length + 1);

  // Check number of options for cryptocurrencies
  const cryptocurrencies = await screen.findAllByTestId("cryptocurrency");

  expect(cryptocurrencies).toHaveLength(10);

  expect(axiosMock.get).toHaveBeenCalled();
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
