import React from 'react'
import styled from '@emotion/styled'

const QuotationContainer = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`

const Price = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`

const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null

  return (
    <QuotationContainer>
      <Price>El precio es: <span>{result.PRICE}</span></Price>
      <Info>El precio más alto del día: <span>{result.HIGHDAY}</span></Info>
      <Info>El precio más bajo del día: <span>{result.LOWDAY}</span></Info>
      <Info>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Info>
      <Info>Última actualización: <span>{result.LASTUPDATE}</span></Info>
    </QuotationContainer>
  )
}

export default Quotation
