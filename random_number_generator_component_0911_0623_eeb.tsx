// 代码生成时间: 2025-09-11 06:23:24
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for the component props
const propTypes = {
  max: PropTypes.number.isRequired,
};

// Define the default props
const defaultProps = {
  max: 100,
};

const RandomNumberGenerator = ({ max }) => {
  // State to store the random number
  const [randomNumber, setRandomNumber] = useState(0);

  // Function to generate a new random number
  const generateRandom = () => {
    setRandomNumber(Math.floor(Math.random() * max));
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <p>The random number is: {randomNumber}</p>
      <button onClick={generateRandom}>Generate</button>
    </div>
  );
};

// Set PropTypes and defaultProps to the component
RandomNumberGenerator.propTypes = propTypes;
RandomNumberGenerator.defaultProps = defaultProps;

export default RandomNumberGenerator;