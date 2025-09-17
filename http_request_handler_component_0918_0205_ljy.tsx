// 代码生成时间: 2025-09-18 02:05:03
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define type for props
interface HttpRequestHandlerProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

// Define the component
const HttpRequestHandlerComponent: React.FC<HttpRequestHandlerProps> = ({ url, method }) => {
  // State to hold the response data
  const [data, setData] = useState<any>(null);
  // State to hold the loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // State to hold any error that might occur
  const [error, setError] = useState<string>(null);

  // Function to handle the HTTP request
  const handleRequest = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { method });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  // Call the HTTP request handler when the component mounts
  React.useEffect(() => {
    handleRequest();
  }, [url, method]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data received</p>
      )}
      <button onClick={() => handleRequest()}>Reload</button>
    </div>
  );
};

// PropTypes validation
HttpRequestHandlerComponent.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']).isRequired,
};

// Default props
HttpRequestHandlerComponent.defaultProps = {
  method: 'GET',
};

export default HttpRequestHandlerComponent;