// 代码生成时间: 2025-09-18 10:40:30
import React, { useState, useEffect, useCallback } from 'react';
import { useNetwork } from 'use-hooks-ts';
import PropTypes from 'prop-types';

// TypeScript类型定义
type NetworkStatusCheckerProps = {
  children: React.ReactNode;
};

// 使用PropTypes
const propTypes = {
  children: PropTypes.node.isRequired,
};

// 网络连接状态检查器组件
const NetworkStatusChecker = ({ children }: NetworkStatusCheckerProps) => {

  // 使用useNetwork hook来检查网络连接状态
  const [networkStatus, setNetworkStatus] = useState<{ online: boolean }>({ online: true });
  
  const { isOnline } = networkStatus;
  
  const updateNetworkStatus = useCallback(() => {
    setNetworkStatus({ online: navigator.onLine });
  }, []);
  
  useEffect(() => {
    // 添加事件监听器
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    
    // 更新状态
    updateNetworkStatus();
    
    // 移除事件监听器
    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, [updateNetworkStatus]);
  
  return children({ isOnline });
};

// 应用propTypes
NetworkStatusChecker.propTypes = propTypes;

export default NetworkStatusChecker;