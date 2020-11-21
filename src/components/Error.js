import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

//Emotion styled applied in the following tags: 
const ErrorMessage = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

/**
 * @name: Error.
 * @description: Component to display error message.
 * @param: Message to display.
 * @return: Formatted message view.
 */
const Error = ({message}) => {
    return (
        <ErrorMessage>
            {message}
        </ErrorMessage>
    );
};

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;