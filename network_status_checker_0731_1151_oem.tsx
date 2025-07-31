// 代码生成时间: 2025-07-31 11:51:21
import React, { useState, useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import PropTypes from 'prop-types';

// Define TypeScript types for better type checking
interface NetworkStatusCheckerProps {
  onConnectionChange: (isConnected: boolean) => void;
}

const NetworkStatusChecker: React.FC<NetworkStatusCheckerProps> = ({ onConnectionChange }) => {
  // State to track network connection status
  const [isConnected, setIsConnected] = useState(true);
  const netInfo = useNetInfo();

  // Effect to handle connection changes
  useEffect(() => {
    // Check if there is a connection
    setIsConnected(netInfo.isConnected);
    // Handler to call when connection status changes
    onConnectionChange(netInfo.isConnected);
  }, [netInfo.isConnected]);

  return (
    <div>
      {/* Render the network status */}
      <p>Network Status: {isConnected ? 'Connected' : 'Not Connected'}</p>
    </div>
  );
};

// PropTypes or TypeScript types for props
NetworkStatusChecker.propTypes = {
  onConnectionChange: PropTypes.func.isRequired,
};

// Default props
NetworkStatusChecker.defaultProps = {
  onConnectionChange: () => {},
};

export default NetworkStatusChecker;