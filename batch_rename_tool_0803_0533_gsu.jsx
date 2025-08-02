// 代码生成时间: 2025-08-03 05:33:18
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the file object
const fileShape = {
  name: PropTypes.string.isRequired,
  newName: PropTypes.string,
};

const BatchRenameTool = ({ files }) => {
  // State to hold the list of files with their new names
  const [fileList, setFileList] = useState(files.map(file => ({ ...file, newName: file.name })));

  // Handle changes to the input fields
  const handleInputChange = (index, value) => {
    setFileList(fileList.map((file, i) =>
      i === index ? { ...file, newName: value } : file
    ));
  };

  // Function to rename files
  const renameFiles = () => {
    // Implement the logic to rename files here
    // For example, you might call an API or use a local filesystem API
    console.log('Renaming files:', fileList);
  };

  return (
    <div>
      {fileList.map((file, index) => (
        <div key={index}>
          <input
            type="text"
            value={file.newName}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <span>Rename from {file.name} to </span>
        </div>
      ))}
      <button onClick={renameFiles}>Rename Files</button>
    </div>
  );
};

BatchRenameTool.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape(fileShape)).isRequired,
};

export default BatchRenameTool;
