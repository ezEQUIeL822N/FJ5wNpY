// 代码生成时间: 2025-08-08 12:46:17
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the prop types
const propTypes = {
  initialMemoryUsage: PropTypes.number,
  onMemoryWarning: PropTypes.func,
};

// Define the default props
const defaultProps = {
  initialMemoryUsage: 0,
  onMemoryWarning: () => {},
};

function MemoryUsageAnalyzer({ initialMemoryUsage, onMemoryWarning }) {
  // State to store memory usage
  const [memoryUsage, setMemoryUsage] = useState(initialMemoryUsage);

  // Function to simulate memory usage
  const simulateMemoryUsage = () => {
    // Simulate increasing memory usage by adding a random factor
    const newMemoryUsage = memoryUsage + Math.floor(Math.random() * 100);
    setMemoryUsage(newMemoryUsage);
  };

  // Effect to handle memory warnings
  useEffect(() => {
    if (memoryUsage > 90) {
      // Call the onMemoryWarning function if memory usage exceeds 90%
      onMemoryWarning(memoryUsage);
    }
  }, [memoryUsage]);

  // Render the component
  return (
    <div>
      <h1>Memory Usage Analyzer</h1>
      <p>Current Memory Usage: {memoryUsage}%</p>
      <button onClick={simulateMemoryUsage}>Simulate Memory Usage</button>
    </div>
  );
}

// Set propTypes and defaultProps
MemoryUsageAnalyzer.propTypes = propTypes;
MemoryUsageAnalyzer.defaultProps = defaultProps;

export default MemoryUsageAnalyzer;