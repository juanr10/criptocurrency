import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import axios from 'axios';
import useCurrency from '../hooks/useCurrency';
import useCryptoCurrency from '../hooks/useCryptoCurrency';
import Error from './Error';

//Emotion styled applied in the following tags: 
const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

/**
 * @name: Form.
 * @description: Component to display a form and manage user requests.
 * @param: Functions for updating the states of the main component. 
 * @return: Form view.
 */
const Form = ({saveCurrency, saveCryptoCurrency}) => {
    //state for a crypto currency listing.
    const [cryptoCurrencies, saveCryptoCurrencies] = useState([]);
    //Form validation flag
    const [error, saveError] = useState(false);

    //Get crypto currencies list from an API
    useEffect(() => {
        const APIconsult = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            saveCryptoCurrencies(result.data.Data);
        };
 
        APIconsult();
    }, []);

    //Currencies array
    const currencies = [
        {code: 'EUR', name: 'Euro'},
        {code: 'USD', name: 'Dólar Estadounidense'},
        {code: 'MXN', name: 'Peso Mexicano'},      
        {code: 'GBP', name: 'Libra Esterlina'}
    ]; 

    //Using custom hooks
    const [currency, SelectCurrency] = useCurrency('Elige una moneda','', currencies);
    const [criptoCurrency, SelectCryptoCurrency] = useCryptoCurrency('Elige una criptomoneda','', cryptoCurrencies);

    /**
     * @name: handleSubmit
     * @description: Management of form data once the user has entered options.
     * @param: submit event.
     */
    const handleSubmit = e => {
        e.preventDefault();
        //Validation
        if(currency === '' || criptoCurrency=== ''){
            saveError(true);
            //Stops execution
            return;
        }
        //Pass data to the main component
        saveCurrency(currency);
        saveCryptoCurrency(criptoCurrency);
        //Clean errors
        saveError(false);
    }
    
    return (
        <form
            onSubmit={handleSubmit}
        >   
            {/* Validation message */}
            {error ? <Error message = "Todos los campos son obligatorios" /> : null}

            <SelectCurrency />
            <SelectCryptoCurrency />

            <Button type="submit" value="Calcular"></Button>
        </form>
    );
};

Form.propTypes = {
    saveCurrency: PropTypes.func.isRequired,
    saveCryptoCurrency: PropTypes.func.isRequired
}

export default Form;