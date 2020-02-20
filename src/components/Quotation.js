import React from 'react'

const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null

  return (
    <div>
      <p>El precio es: <span>{result.PRICE}</span></p>
      <p>El precio más alto del día: <span>{result.HIGHDAY}</span></p>
      <p>El precio más bajo del día: <span>{result.LOWDAY}</span></p>
      <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
      <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
    </div>
  )
}

export default Quotation
