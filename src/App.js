import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './cryptocurrency.png';
import Form from './components/Form';
import Quotation from './components/Quotation';
import Spinner from './components/Spinner';

//Emotion styled applied in the following tags: 
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  /* Mobile screen */
  @media screen and (max-device-width : 480px){
    margin: 0 auto 0 auto; 
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 25px;
  margin-top: 50px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
  
  /* Mobile screen */
  @media screen and (max-device-width : 480px){
    margin-top: 0px;
    font-size: 35px;
  }
`;

/**
 * @name: criptocurrency.
 * @description: Quote crypto currencies on the desired currency. Made with ReactJS, Emotion styled library, google fonts & SpinKit.
 * @author: Juan Argudo.
 * @version: 19/03/2020.
 */
function App() {
  const [currency, saveCurrency] = useState('');
  const [cryptoCurrency, saveCryptoCurrency] = useState('');
  const [result, saveResult] = useState({});
  //Loading spinner flag
  const [loading, saveLoading] = useState(false);

  //Executes the function when the main states are updated
  useEffect(() => {
    const quoteCryptoCurrency = async () => {
      //It avoids execution when the application is started
      if(currency === ''||cryptoCurrency==='') return;

      //Consult the API for a quotation.
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const result = await axios.get(url);
      //Show loading spinner
      saveLoading(true);
      //Hide spinner & update the result state
      setTimeout(() => {
        saveLoading(false);
        saveResult(result.data.DISPLAY[cryptoCurrency][currency]);
      }, 3000)
    }
    
    quoteCryptoCurrency();
  },[currency, cryptoCurrency])

  //Show spinner or result
  const component = (loading) ? <Spinner/> : <Quotation result={result}/>

  return (
    <Container>
      <div>
        <Image src={image} alt="image-cryptocurrencies"/>
      </div>

      <div>
        <Heading>
          Cotiza criptomonedas
        </Heading>

        <Form
            saveCurrency= {saveCurrency}
            saveCryptoCurrency= {saveCryptoCurrency}
        />

        {component}
      </div>
    </Container>
  );
}

export default App;
