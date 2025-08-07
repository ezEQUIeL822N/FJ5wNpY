// 代码生成时间: 2025-08-07 22:20:18
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时，可以替换PropTypes
// import PropTypes from 'prop-types';

// 定义组件的props类型
const propTypes = {
  onMigrate: PropTypes.func.isRequired,
  migrationStatus: PropTypes.string.isRequired
};

const DatabaseMigrationTool = ({ onMigrate, migrationStatus }) => {
  // 使用useState Hook来管理状态
  const [isMigrating, setIsMigrating] = useState(false);

  const handleMigration = () => {
    setIsMigrating(true);
    onMigrate().then(() => {
      setIsMigrating(false);
    }).catch(() => {
      setIsMigrating(false);
    }).finally(() => {
      // 迁移完成后的一些操作
    });
  };

  return (
    <div>
      <h1>Database Migration Tool</h1>
      {isMigrating ? (
        <p>Migration in progress...</p>
      ) : (
        <button onClick={handleMigration} disabled={isMigrating}>
          Start Migration
        </button>
      )}
      {migrationStatus && <p>Migration Status: {migrationStatus}</p>}
    </div>
  );
};

DatabaseMigrationTool.propTypes = propTypes;

export default DatabaseMigrationTool;
