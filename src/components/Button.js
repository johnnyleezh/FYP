import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// Available button styles and sizes
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

// Button component
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  // Determine the button style and size based on provided props
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
