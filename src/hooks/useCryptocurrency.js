import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Bebas Neue", cursive;
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 2rem;
  text-transform: uppercase;
`;

const Select = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 3px;
  display: block;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
`;
const useCryptocurrency = (label = "Criptomoneda", initialState = "", opts) => {
  const [state, setState] = useState(initialState);

  const SelectCrypto = () => {
    return (
      <>
        <Label>{label}</Label>
        <Select
          data-testid="cryptocurrencySelect"
          onChange={(e) => setState(e.target.value)}
          value={state}
        >
          <option value="">-- Selecione --</option>
          {opts.map(({ CoinInfo }) => (
            <option
              data-testid="cryptocurrency"
              key={CoinInfo.Id}
              value={CoinInfo.Name}
            >
              {CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </>
    );
  };

  return [state, SelectCrypto, setState];
};

export default useCryptocurrency;
