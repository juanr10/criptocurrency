import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

//Emotion styled applied in the following tags: 
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

/**
 * @name: useCryptoCurrency
 * @description: Custom hook for crypto currency management and display an html fragment (select).
 * @param: a label and options for the select and the initial state.
 * @return: state & the select.
 */
const useCryptoCurrency = (label, initState, options) => {
    const [state, updateState] = useState(initState);

    // Creating the select
    const SelectCryptoCurrency = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange = { e => updateState(e.target.value)}
                value = {state}
            >
                <option value="">--Selecciona--</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
                
            </Select>
        </Fragment>
    )
    
    //Return state & the select
     return [state, SelectCryptoCurrency];
};

export default useCryptoCurrency;