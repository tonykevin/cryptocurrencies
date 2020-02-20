import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

import { Form, Quotation, Spinner } from './components'
import cryptoImage from './images/cryptoImage.png'

const Container = styled.div`
  margin: 0 auto;
  max-width: 992px;
  padding-left: 2rem;
  padding-right: 2rem;

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
  font-weight: 700;
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
  const [currency, setCurrency] = useState('')
  const [cryptocurrency, setCryptocurrency] = useState('')
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      if (currency === '' || cryptocurrency === '') return

      const baseUrl = 'https://min-api.cryptocompare.com/data/pricemultifull'
      const url = `${baseUrl}?fsyms=${cryptocurrency}&tsyms=${currency}`
      const response = await axios.get(url)

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setResult(response.data.DISPLAY[cryptocurrency][currency])
      }, 3000)
    }
    quoteCryptocurrency()
  }, [cryptocurrency, currency])

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
        <Form
          setCryptocurrency={setCryptocurrency}
          setCurrency={setCurrency}
        />
        {loading ? <Spinner /> : <Quotation result={result} />}
      </div>
    </Container>
  )
}

export default App
