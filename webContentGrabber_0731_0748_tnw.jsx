// 代码生成时间: 2025-07-31 07:48:51
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the PropTypes for the component's props
const propTypes = {
  url: PropTypes.string.isRequired
};

// Define the default props
const defaultProps = {
  url: ''
};

function WebContentGrabber({ url }) {
  // State to store the fetched content
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the web content
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        setContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchContent function when the component mounts
    if (url) {
      fetchContent();
    }
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
}

WebContentGrabber.propTypes = propTypes;
WebContentGrabber.defaultProps = defaultProps;

export default WebContentGrabber;