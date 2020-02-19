import React, { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Bebas Neue', cursive;
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 2rem;
  text-transform: uppercase;
`

const SelectContainer = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 3px;
  display: block;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
`
const useCurrency = (label = 'Moneda', initialState = '', opts) => {
  const [state, setState] = useState(initialState)

  const Select = () => {
    return (
      <>
        <Label>{label}</Label>
        <SelectContainer
          onChange={e => setState(e.target.value)}
          value={state}
        >
          <option value=''>-- Selecione --</option>
          {
            opts.map(({ code, name }) => (
              <option key={code} value={code}>{name}</option>
            ))
          }
        </SelectContainer>
      </>
    )
  }

  return [state, Select, setState]
}

export default useCurrency
