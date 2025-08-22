// 代码生成时间: 2025-08-23 05:54:08
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types'; // 导入PropTypes

// 使用TypeScript，可以替换PropTypes
// import { FC, PropsWithChildren } from 'react';
// import { MyDocumentType } from './types';

const DocumentConverter = ({ file }) => {
  const [content, setContent] = useState(''); // 状态管理

  // 读取文件并转换内容
  const readFile = useCallback((event) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const result = fileReader.result;
      if (result) {
        setContent(result.toString()); // 将文件内容设置到state中
      }
    };
    fileReader.readAsText(event.target.files[0]);
  }, []);

  // 处理文件上传
  const handleFileUpload = (event) => {
    readFile(event);
  };

  return (
    <div>
      <h1>Document Format Converter</h1>
      <input type="file" onChange={handleFileUpload} />
      {content && (
        <pre>{content}</pre> // 显示文件内容
      )}
    </div>
  );
};

// 使用PropTypes
DocumentConverter.propTypes = {
  file: PropTypes.string,
};

// 使用TypeScript
// DocumentConverter.propTypes = {
//   file: PropTypes.string,
// };

export default DocumentConverter;
