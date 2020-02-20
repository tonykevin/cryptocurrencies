import React from 'react'
import styled from '@emotion/styled'

const ErrorMessage = styled.p`
  background-color: #b7322c;
  color: #fff;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
`

const Error = ({ message }) => (
  <ErrorMessage>{message}</ErrorMessage>
)

export default Error
