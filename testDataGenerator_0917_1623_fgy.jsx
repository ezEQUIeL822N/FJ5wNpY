// 代码生成时间: 2025-09-17 16:23:36
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义PropTypes或TypeScript类型
const propTypes = {
  count: PropTypes.number,
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

// 测试数据生成器组件
const TestDataGenerator = ({ count = 10, onCreate, onUpdate, onDelete }) => {
  const [data, setData] = useState(Array(count).fill(null).map(() => ({
    id: Date.now(),
    name: `User ${Date.now()}`,
  })));

  const createData = () => {
    const newData = {
      id: Date.now(),
      name: `User ${Date.now()}`,
    };
    setData([...data, newData]);
    if (onCreate) onCreate(newData);
  };

  const updateData = (index) => {
    const newData = {
      id: data[index].id,
      name: `Updated User ${Date.now()}`,
    };
    const newDataArray = [...data];
    newDataArray[index] = newData;
    setData(newDataArray);
    if (onUpdate) onUpdate(index, newData);
  };

  const deleteData = (index) => {
    const newDataArray = data.filter((_, i) => i !== index);
    setData(newDataArray);
    if (onDelete) onDelete(index);
  };

  return (
    <div>
      <button onClick={() => createData()}>Add Data</button>
      {data.map((item, index) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => updateData(index)}>Update</button>
          <button onClick={() => deleteData(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

// 设置propTypes
TestDataGenerator.propTypes = propTypes;

export default TestDataGenerator;