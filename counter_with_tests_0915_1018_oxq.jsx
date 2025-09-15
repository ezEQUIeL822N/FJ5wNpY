// 代码生成时间: 2025-09-15 10:18:00
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Counter functional component with state and PropTypes
const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  initialCount: 0,
};

// Unit tests for Counter component
describe('Counter Component', () => {
  test('renders and starts with the initial count', () => {
    render(<Counter initialCount={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('increments the count', () => {
    render(<Counter initialCount={10} />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  test('decrements the count', () => {
    render(<Counter initialCount={10} />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('9')).toBeInTheDocument();
  });
});

export default Counter;
