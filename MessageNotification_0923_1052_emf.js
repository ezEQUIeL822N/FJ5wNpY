// 代码生成时间: 2025-09-23 10:52:55
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Interface for the props
interface MessageNotificationProps {
  messages: Array<{ id: string; content: string }>;
  onAnimationEnd?: () => void;
}

const MessageNotification = ({ messages, onAnimationEnd }: MessageNotificationProps) => {
  const [visibleMessage, setVisibleMessage] = useState<{ id: string; content: string } | null>(null);

  const showMessage = (message) => {
    setVisibleMessage(message);
    setTimeout(() => {
      setVisibleMessage(null);
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, 3000);
  };

  React.useEffect(() => {
    if (messages.length > 0) {
      showMessage(messages[0]);
    }
  }, [messages]);

  return (
    <div className="message-notification-container">
      {visibleMessage && (
        <div className="message-notification" onAnimationEnd={onAnimationEnd}>
          {visibleMessage.content}
        </div>
      )}
    </div>
  );
};

// PropTypes or TypeScript types
MessageNotification.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAnimationEnd: PropTypes.func,
};

export default MessageNotification;