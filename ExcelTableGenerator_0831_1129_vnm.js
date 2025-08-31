// 代码生成时间: 2025-08-31 11:29:23
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExcelTableGenerator.css'; // Assume we have a CSS file for styling

const ExcelTableGenerator = ({ columns }) => {
  // State to manage table data
  const [rows, setRows] = useState(Array(columns.length).fill().map(() => Array(columns.length).fill('')));

  // Function to handle cell value change
  const handleCellChange = (rowIndex, columnIndex, value) => {
    const newRows = [...rows];
    newRows[rowIndex][columnIndex] = value;
    setRows(newRows);
  };

  return (
    <table className='excel-table-generator'>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td key={columnIndex}>
                <input
                  type='text'
                  value={cell}
                  onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ExcelTableGenerator.propTypes = {
  columns: PropTypes.number.isRequired,
};

// TypeScript users can use the following type instead of PropTypes
// import { FC, PropsWithChildren } from 'react';

// interface ExcelTableGeneratorProps {
//   columns: number;
// }

// const ExcelTableGenerator: FC<ExcelTableGeneratorProps> = ({ columns }) => {
//   // ... implementation remains the same
// };

export default ExcelTableGenerator;
