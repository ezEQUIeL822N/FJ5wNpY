// 代码生成时间: 2025-08-04 06:01:47
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Type definitions for TypeScript or PropTypes
interface FormData {
  name: string;
  email: string;
}

const FormValidatorComponent: React.FC<{
  onFormSubmit: (formData: FormData) => void;
}> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to validate form data
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onFormSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="name-error"
        />
        {errors.name && <div id="name-error">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="email-error"
        />
        {errors.email && <div id="email-error">{errors.email}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

FormValidatorComponent.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default FormValidatorComponent;