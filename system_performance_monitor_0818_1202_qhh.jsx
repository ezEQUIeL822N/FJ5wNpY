// 代码生成时间: 2025-08-18 12:02:07
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SystemPerformanceMonitor.css'; // Assume we have some styles defined here

// Define the propTypes for the component
const propTypes = {
  updateInterval: PropTypes.number,
  showCPU: PropTypes.bool,
  showMemory: PropTypes.bool,
  showNetwork: PropTypes.bool,
};

// Define the default props
const defaultProps = {
  updateInterval: 1000,
  showCPU: true,
  showMemory: true,
  showNetwork: true,
};

const SystemPerformanceMonitor = ({ updateInterval, showCPU, showMemory, showNetwork }) => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkUsage, setNetworkUsage] = useState(0);

  // Function to fetch system performance data
  const fetchPerformanceData = () => {
    // Here you would implement the logic to fetch actual system performance data
    // For demonstration purposes, we're using mock data
    setCpuUsage(Math.random() * 100);
    setMemoryUsage(Math.random() * 100);
    setNetworkUsage(Math.random() * 100);
  };

  // Use effect to fetch data at the specified interval
  useEffect(() => {
    const intervalId = setInterval(fetchPerformanceData, updateInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [updateInterval]);

  // Render the component
  return (
    <div className="system-performance-monitor">
      {showCPU && <div>CPU Usage: {cpuUsage.toFixed(2)}%</div>}
      {showMemory && <div>Memory Usage: {memoryUsage.toFixed(2)}%</div>}
      {showNetwork && <div>Network Usage: {networkUsage.toFixed(2)}%</div>}
    </div>
  );
};

// Set propTypes and defaultProps
SystemPerformanceMonitor.propTypes = propTypes;
SystemPerformanceMonitor.defaultProps = defaultProps;

export default SystemPerformanceMonitor;
