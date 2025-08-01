// 代码生成时间: 2025-08-01 23:43:07
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the type for the user object using TypeScript
type User = {
  id: number;
  name: string;
  role: string;
};

// Define the props for the AuthComponent using PropTypes
const AuthComponent = ({ user }) => {
  // State to control access based on user role
  const [canAccess, setCanAccess] = useState(false);

  // Effect to determine access control
  useEffect(() => {
    if (user && user.role === 'admin') {
      setCanAccess(true);
    } else {
      setCanAccess(false);
    }
  }, [user]);

  // Render the component based on access control
  if (!canAccess) {
    return <div>You do not have access to this page.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Render admin content here */}
    </div>
  );
};

// Prop type validation
AuthComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default AuthComponent;