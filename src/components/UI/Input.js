import PropTypes from 'prop-types';
import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef(({ input, label }, ref) => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input
      ref={ref}
      id={input.id}
      type={input.type}
      min={input.min}
      max={input.max}
      step={input.step}
      defaultValue={input.defaultValue}
    />
  </div>
));

Input.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
