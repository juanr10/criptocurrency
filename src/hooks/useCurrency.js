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
 * @name: useCurrency
 * @description: Custom hook for currency management and display an html fragment (select).
 * @param: a label and options for the select and the initial state.
 * @return: state & the select.
 */
const useCurrency = (label, initState, options) => {
    const [state, updateState] = useState(initState);

    // Creating the select
    const SelectCurrency = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange = { e => updateState(e.target.value)}
                value = {state}
            >
                <option value="">--Selecciona--</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </Select>
        </Fragment>
    )
    
    //Return state & the select
     return [state, SelectCurrency];
};

export default useCurrency;
