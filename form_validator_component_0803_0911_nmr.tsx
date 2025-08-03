// 代码生成时间: 2025-08-03 09:11:51
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the form data and the validation function
interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormValidationProps {
  submitForm: (data: FormData) => void;
}

const FormValidatorComponent: React.FC<FormValidationProps> = ({ submitForm }) => {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });
  
  // State to handle form submission status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validate the form data
  const validateForm = (data: FormData): boolean => {
    const errors = {};
    if (!data.username.trim()) errors.username = 'Username is required';
    if (!data.email.includes('@')) errors.email = 'Email is invalid';
    if (data.password.length < 6) errors.password = 'Password must be at least 6 characters long';
    return Object.keys(errors).length === 0;
  }

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm(formData)) {
      submitForm(formData);
    } else {
      // Show validation errors (not implemented here)
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
};

FormValidatorComponent.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default FormValidatorComponent;