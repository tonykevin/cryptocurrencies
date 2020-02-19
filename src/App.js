import React from 'react'
import styled from '@emotion/styled'

import cryptoImage from './images/cryptoImage.png'

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;

  @media (min-width: 992px) {
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Image = styled.img`
  margin-top: 5rem;
  max-width: 100%;
`

const Heading = styled.h1`
  color: #fff;
  font-family: 'Bebas Neue', cursive;
  font-size: 50px;
  font-weigth: 700;
  margin-bottom: 3.2rem;
  margin-top: 5rem;
  text-align: left;

  &::after {
    background-color: #66a2fe;
    content: '';
    display: block;
    height: 6px;
    width: 100px;
  }
`

function App () {
  return (
    <Container>
      <div>
        <Image
          alt='image criptomoneda'
          src={cryptoImage}
        />
      </div>
      <div>
        <Heading>Cotiza criptomonedas en tiempo real</Heading>
      </div>
    </Container>
  )
}

export default App
