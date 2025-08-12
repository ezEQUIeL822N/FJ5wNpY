// 代码生成时间: 2025-08-13 02:10:10
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the PropTypes for the message notification component
const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  })),
  onDismiss: PropTypes.func,
};

// Define the default properties
const defaultProps = {
  messages: [],
  onDismiss: () => {},
};

function MessageNotification({ messages, onDismiss }) {
  // Function to handle dismissal of a message
  const dismissMessage = (id) => {
    onDismiss(id);
  };

  // Render messages
  return (
    <div className='message-notification'>
      {messages.map((message) => (
        <div key={message.id} className={`notification ${message.type}`}>
          {message.text}
          <button onClick={() => dismissMessage(message.id)}>Dismiss</button>
        </div>
      ))}
    </div>
  );
}

// Set the propTypes and defaultProps
MessageNotification.propTypes = propTypes;
MessageNotification.defaultProps = defaultProps;

export default MessageNotification;
