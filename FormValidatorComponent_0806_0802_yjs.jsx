// 代码生成时间: 2025-08-06 08:02:37
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormValidatorComponent({ validationSchema }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Function to validate form data
  const validateData = (data) => {
    let newErrors = {};
    for (const field in validationSchema) {
      if (validationSchema[field].required && !data[field]) {
        newErrors[field] = 'This field is required';
      } else if (validationSchema[field].type === 'email' && !/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(data[field])) {
        newErrors[field] = 'Invalid email address';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (validateData(formData)) {
      console.log('Form submitted with valid data: ', formData);
      // Here you would normally handle the form submission logic
    } else {
      console.error('Form submission failed due to validation errors: ', errors);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(validationSchema).map(([field, { required }]) => (
        <div key={field}>
          <label htmlFor={field}>{field}</label>
          <input
            type="text"
            name={field}
            value={formData[field] || ''}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors[field] && <div style={{ color: 'red' }}>{errors[field]}</div>}
        </div>
      ))}
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
}

// PropTypes for validationSchema
FormValidatorComponent.propTypes = {
  validationSchema: PropTypes.objectOf(
    PropTypes.shape({
      required: PropTypes.bool,
      type: PropTypes.string
    })
  ).isRequired,
};

export default FormValidatorComponent;