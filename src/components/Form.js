import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import { useCryptocurrency, useCurrency } from "../hooks";
import Error from "./Error";

const Button = styled.button`
  background-color: #66a2fe;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 1.25em;
  font-weight: bold;
  margin-top: 20px;
  padding: 0.8rem;
  transition: background-color 0.3s;
  width: 100%;

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCryptocurrency, setCurrency }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  const CURRENCIES = [
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra esterlina" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "PEN", name: "Soles" },
    { code: "USD", name: "Dólar de Estados unidos" },
  ];

  const [currency, SelectCurrency] = useCurrency(
    "Elige tu moneda",
    "",
    CURRENCIES
  );

  const [cryptoCurrency, SelectCrypto] = useCryptocurrency(
    "Elige tu criptomoneda",
    "",
    cryptoList
  );

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?
        limit=10&tsym=USD`;
      const result = await axios.get(url);
      setCryptoList(result.data.Data);
    };
    consultAPI();
  }, []);

  const quoteCurrency = (e) => {
    e.preventDefault();

    if (currency === "" || cryptoCurrency === "") {
      setError(true);
      return 1;
    }

    setError(false);
    setCurrency(currency);
    setCryptocurrency(cryptoCurrency);
  };

  return (
    <form onSubmit={quoteCurrency}>
      {error ? <Error message="Todos los campos son requeridos" /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button data-testid="submit" type="submit">
        Calcular
      </Button>
    </form>
  );
};

export default Form;
