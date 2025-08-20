// 代码生成时间: 2025-08-20 08:36:19
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TypeScript类型定义
// interface HashCalculatorProps {
//   onHashChange?: (hash: string) => void;
// }

const HashCalculator = () => {
  // state管理
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  // 计算哈希值
  const calculateHash = () => {
    const inputElement = document.createElement('textarea');
    inputElement.value = input;
    const hashValue = CryptoJS.SHA256(inputElement.value).toString();
    setHash(hashValue);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={calculateHash}>Calculate Hash</button>
      <p>Hash: <span>{hash}</span></p>
    </div>
  );
};

// PropTypes类型检查
HashCalculator.propTypes = {
//   onHashChange: PropTypes.func,
// };

export default HashCalculator;