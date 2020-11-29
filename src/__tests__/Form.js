import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import { cryptoList, currencies } from "../__mocks__";
import { Form } from "../components";

const axiosMock = axios;
const setCryptocurrency = jest.fn();
const setCurrency = jest.fn();

test("<Form />", async () => {
  //Consume false data
  axiosMock.get = jest.fn().mockResolvedValue({
    data: cryptoList,
  });

  render(
    <Form setCurrency={setCurrency} setCryptocurrency={setCryptocurrency} />
  );

  // Check number of options for currencies
  const currencySelect = screen.getByTestId("currencySelect");
  expect(currencySelect.children.length).toEqual(currencies.length + 1);

  // Check number of options for cryptocurrencies
  const cryptocurrencies = await screen.findAllByTestId("cryptocurrency");

  expect(cryptocurrencies).toHaveLength(10);

  expect(axiosMock.get).toHaveBeenCalled();
  expect(axiosMock.get).toHaveBeenCalledTimes(1);

  // Select bitcoin and USD
  userEvent.selectOptions(screen.getByTestId("currencySelect"), "USD");
  userEvent.selectOptions(screen.getByTestId("cryptocurrencySelect"), "BTC");
  userEvent.click(screen.getByTestId("submit"));

  expect(setCurrency).toHaveBeenCalled();
  expect(setCurrency).toHaveBeenCalledTimes(1);

  expect(setCryptocurrency).toHaveBeenCalled();
  expect(setCryptocurrency).toHaveBeenCalledTimes(1);
});
