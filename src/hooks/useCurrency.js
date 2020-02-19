import React, { useState } from 'react'

const useCurrency = () => {
  const [state, setState] = useState('')

  const Select = () => {
    return (
      <>
        <label>Moneda</label>
        <select>
          <option value='MXN'>Peso mexicano</option>
        </select>
      </>
    )
  }

  return [state, Select, setState]
}

export default useCurrency
