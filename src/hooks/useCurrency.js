import React, { useState } from 'react'

const useCurrency = (label = 'Moneda', initialState = '', opts) => {
  const [state, setState] = useState(initialState)

  const Select = () => {
    return (
      <>
        <label>{label}</label>
        <select>
          <option value=''>-- Selecione --</option>
          {
            opts.map(({ code, name }) => (
              <option key={code} value={code}>{name}</option>
            ))
          }
        </select>
      </>
    )
  }

  return [state, Select, setState]
}

export default useCurrency
