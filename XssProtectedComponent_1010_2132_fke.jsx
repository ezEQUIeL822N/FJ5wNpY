// 代码生成时间: 2025-10-10 21:32:46
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify'; // Use DOMPurify for sanitizing HTML to prevent XSS

// PropTypes for the component
const propTypes = {
  userContent: PropTypes.string.isRequired,
};

// Define the component using function component and Hooks
const XssProtectedComponent = ({ userContent }) => {
  // State to hold the sanitized content
  const [sanitizedContent, setSanitizedContent] = useState('');

  // Function to handle content sanitization
  const sanitizeContent = () => {
    const cleanContent = DOMPurify.sanitize(userContent);
    setSanitizedContent(cleanContent);
  };

  // Use effect to sanitize content when component mounts or userContent changes
  React.useEffect(() => {
    sanitizeContent();
  }, [userContent]);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
  );
};

// Set the propTypes to the component
XssProtectedComponent.propTypes = propTypes;

export default XssProtectedComponent;
