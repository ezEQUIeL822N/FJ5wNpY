// 代码生成时间: 2025-09-09 09:00:40
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the data that will be backed up and restored
type Data = {
  [key: string]: any;
};

// Define the props type with PropTypes
const propTypes = {
  data: PropTypes.object.isRequired,
  onBackup: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
};

// The BackupRestoreComponent functional component
const BackupRestoreComponent: React.FC<PropTypes.InferProps<typeof propTypes>> = ({ data, onBackup, onRestore }) => {
  // State to store the backup data
  const [backupData, setBackupData] = useState<Data>({});

  // Handler to backup data
  const handleBackup = () => {
    // Call the onBackup prop function to perform the backup
    onBackup(data).then((backup) => {
      setBackupData(backup);
    });
  };

  // Handler to restore data
  const handleRestore = () => {
    // Call the onRestore prop function to perform the restore
    if (Object.keys(backupData).length > 0) {
      onRestore(backupData);
    } else {
      alert('No backup data available to restore.');
    }
  };

  return (
    <div>
      <h2>Data Backup and Restore</h2>
      <button onClick={handleBackup}>Backup Data</button>
      <button onClick={handleRestore} disabled={Object.keys(backupData).length === 0}>Restore Data</button>
    </div>
  );
};

// Set the propTypes for the component
BackupRestoreComponent.propTypes = propTypes;

export default BackupRestoreComponent;