// 代码生成时间: 2025-09-09 13:46:05
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the PropTypes for the component's props
const propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDataChange: PropTypes.func.isRequired
};

// Define the TypeScript type for the component's props
type DataCleanerProps = {
  data: string[];
  onDataChange: (cleanedData: string[]) => void;
};

// The DataCleanerComponent function component
const DataCleanerComponent: React.FC<DataCleanerProps> = ({ data, onDataChange }) => {
  // State to manage the cleaned data
  const [cleanedData, setCleanedData] = useState<string[]>(data);

  // Function to clean data (example implementation)
  const cleanData = (rawData: string[]) => {
    return rawData.map((item) => item.trim().toUpperCase());
  };

  // Handle changes in the cleaned data
  const handleChange = () => {
    const newCleanedData = cleanData(data);
    setCleanedData(newCleanedData);
    onDataChange(newCleanedData);
  };

  return (
    <div>
      <button onClick={handleChange}>Clean Data</button>
      <div>Cleaned Data:</div>
      <div>{cleanedData.join(', ')}</div>
    </div>
  );
};

// Set the propTypes
DataCleanerComponent.propTypes = propTypes;

export default DataCleanerComponent;