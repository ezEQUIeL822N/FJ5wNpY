// 代码生成时间: 2025-09-17 03:34:06
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的prop类型
const propTypes = {
    data: PropTypes.object.isRequired,  // 需要备份的数据
    onDataChange: PropTypes.func.isRequired, // 数据变更时调用的回调函数
};

// 使用TypeScript可以定义接口
// interface DataProps {
//     data: object;
//     onDataChange: (data: object) => void;
// }

const DataBackupAndRestoreComponent = (props) => {
    const [backupData, setBackupData] = useState(props.data);
    const [currentData, setCurrentData] = useState(props.data);

    // 备份数据
    const backup = () => {
        setBackupData(currentData);
    };

    // 恢复数据
    const restore = () => {
        setCurrentData(backupData);
        props.onDataChange(backupData);
    };

    // 数据变更处理器
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newData = { ...currentData, [name]: value };
        setCurrentData(newData);
        props.onDataChange(newData);
    };

    return (
        <div>
            <div>
                <label>
                    Data Input:
                    <input
                        name='dataInput'
                        value={currentData.dataInput || ''}
                        onChange={handleChange}
                        type='text'
                    />
                </label>
            </div>
            <button onClick={backup}>Backup</button>
            <button onClick={restore}>Restore</button>
        </div>
    );
};

// 设置默认prop类型
DataBackupAndRestoreComponent.propTypes = propTypes;

export default DataBackupAndRestoreComponent;