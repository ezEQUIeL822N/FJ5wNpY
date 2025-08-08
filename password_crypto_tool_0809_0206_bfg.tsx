// 代码生成时间: 2025-08-09 02:06:40
// password_crypto_tool.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript类型
type Props = {
  initialText?: string;
};

// 函数组件
const PasswordCryptoTool = ({ initialText = "" }: Props) => {
  // state管理
  const [text, setText] = useState(initialText);
  const [encrypted, setEncrypted] = useState("");

  // 加密函数
  const encrypt = () => {
    const cipher = Buffer.from(text).toString('base64');
    setEncrypted(cipher);
  };

  // 解密函数
  const decrypt = () => {
    const buffer = Buffer.from(encrypted, 'base64');
    const plain = buffer.toString('utf-8');
    setText(plain);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt} disabled={!encrypted}>Decrypt</button>
      <p>Encrypted: {encrypted}</p>
    </div>
  );
};

// PropTypes验证
PasswordCryptoTool.propTypes = {
  initialText: PropTypes.string,
};

export default PasswordCryptoTool;