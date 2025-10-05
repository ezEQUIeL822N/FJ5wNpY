// 代码生成时间: 2025-10-06 03:29:19
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the PropTypes for the component
const propTypes = {
    files: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired
};

// Define TypeScript types (if using TypeScript)
// interface FileMetadataExtractorProps {
//   files: File[];
// }

// Function component using hooks
const FileMetadataExtractor = ({ files }) => {
    const [metadata, setMetadata] = useState({});

    // Function to extract metadata from a file
    const extractMetadata = (file) => {
        const { name, size, type } = file;
        return {
            name,
            size: size.toLocaleString(), // Convert size to a more readable format
            type
        };
    };

    // Effect to handle file metadata extraction on file list change
    React.useEffect(() => {
        const metadataList = files.map(extractMetadata);
        setMetadata(metadataList);
    }, [files]);

    return (
        <div>
            <h2>File Metadata</h2>
            {metadata.map((meta, index) => (
                <div key={index}>
                    <p>Name: {meta.name}</p>
                    <p>Size: {meta.size}</p>
                    <p>Type: {meta.type}</p>
                </div>
            ))}
        </div>
    );
};

// PropTypes check
FileMetadataExtractor.propTypes = propTypes;

export default FileMetadataExtractor;