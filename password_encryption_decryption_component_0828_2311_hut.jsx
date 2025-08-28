// 代码生成时间: 2025-08-28 23:11:12
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; // 用于生成随机密钥

// 密码加密解密组件
const PasswordEncryptionDecryption = () => {
  const [password, setPassword] = useState(''); // 密码状态
  const [secretKey, setSecretKey] = useState(uuidv4()); // 密钥状态
  const [encryptedPassword, setEncryptedPassword] = useState(''); // 加密密码状态
  const [decryptedPassword, setDecryptedPassword] = useState(''); // 解密密码状态

  // 加密密码的函数
  const encryptPassword = () => {
    const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();
    setEncryptedPassword(encrypted);
  };

  // 解密密码的函数
  const decryptPassword = () => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedPassword(decrypted);
  };

  return (
    <div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={encryptPassword}>Encrypt</button>
      <div>Encrypted: {encryptedPassword}</div>
      <button onClick={decryptPassword} disabled={!encryptedPassword}>Decrypt</button>
      <div>Decrypted: {decryptedPassword}</div>
    </div>
  );
};

// PropTypes 验证
PasswordEncryptionDecryption.propTypes = {
  password: PropTypes.string,
};

// 默认Props
PasswordEncryptionDecryption.defaultProps = {
  password: '',
};

export default PasswordEncryptionDecryption;