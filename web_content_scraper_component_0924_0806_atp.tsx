// 代码生成时间: 2025-09-24 08:06:21
 * @props {string} url - The URL to fetch content from.
 * @props {string} targetElementId - The ID of the DOM element to display the content.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Type definition using TypeScript
type WebContentScraperProps = {
  url: string;
  targetElementId: string;
};

const WebContentScraperComponent: React.FC<WebContentScraperProps> = ({ url, targetElementId }) => {
  // State to store the fetched content
  const [content, setContent] = useState<string>('\');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('\');

  // Effect to fetch content on mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const htmlContent = await response.text();
        setContent(htmlContent);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch content');
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [url]); // Dependency array to re-run the effect if URL changes

  // Render the component
  return (
    <div id={targetElementId} data-testid="content-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

// PropTypes or TypeScript type definitions
WebContentScraperComponent.propTypes = {
  url: PropTypes.string.isRequired,
  targetElementId: PropTypes.string.isRequired,
};

export default WebContentScraperComponent;