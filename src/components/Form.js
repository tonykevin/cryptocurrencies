import React from 'react'
import styled from '@emotion/styled'

import { useCurrency } from '../hooks'

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
`

const Form = () => {
  const [currency, SelectCurrency, updateState] = useCurrency()
  return (
    <form>
      <SelectCurrency />
      <Button type='submit'>Calcular</Button>
    </form>
  )
}

export default Form
