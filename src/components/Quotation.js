import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import './Quotation.css';

//Emotion styled applied in the following tags: 
const Div = styled.div`
    margin-top: 20px;
    width: 400px;
    color: #FFF;
    font-family: 'Bebas Neue', cursive;
`;

/**
 * @name: Quotation.
 * @description: Component for displaying API results.
 * @param: Object obtained from the API.
 * @return: Formatted result view.
 */
const Quotation = ({result}) => {
    //Validation object
    if(Object.keys(result).length === 0) return null;
    console.log(result);
    return (
        <Div>
            <ul>
                <li><span>Precio criptomoneda: {result.PRICE}</span></li>
                <li><span>Precio m&aacute;s alto del d&iacute;a: {result.HIGHDAY}</span></li>
                <li><span>Precio m&aacute;s bajo del d&iacute;a: {result.LOWDAY}</span></li>
                <li><span>Variaci&oacute;n &uacute;ltimas 24 horas: {result.CHANGEPCT24HOUR}%</span></li>
            </ul>
        </Div>
    );
};

Quotation.propTypes = {
    result: PropTypes.object.isRequired
}

export default Quotation;