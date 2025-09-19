// 代码生成时间: 2025-09-19 11:01:22
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用 PropTypes 进行类型检查
const propTypes = {
  file: PropTypes.instanceOf(File).isRequired
};

// 使用 TypeScript 类型
interface UnzipToolProps {
  file: File;
}

// 函数组件
const UnzipTool = ({ file }: UnzipToolProps) => {
  const [isUnzipped, setIsUnzipped] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  // 解压文件的逻辑
  const unzipFile = async () => {
    try {
      const fileReader = new FileReader();
      const content = await new Promise((resolve, reject) => {
        fileReader.onload = (e) => resolve(e.target.result);
        fileReader.onerror = reject;
        fileReader.readAsArrayBuffer(file);
      });

      // 假设使用 JSZip 库进行解压
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(content);
      const unzippedFiles = Object.keys(zip.files).map(key => zip.files[key].name);

      // 显示解压文件列表
      setOutput(unzippedFiles.join('
'));
      setIsUnzipped(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={unzipFile} disabled={isUnzipped}>Unzip File</button>
      {isUnzipped && <div>Unzipped Files:
        <pre>{output}</pre>
      </div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

UnzipTool.propTypes = propTypes;

export default UnzipTool;