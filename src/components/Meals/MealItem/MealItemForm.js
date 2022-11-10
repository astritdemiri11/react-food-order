import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    if (onAddToCart) {
      onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

MealItemForm.propTypes = {
  id: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func,
};

MealItemForm.defaultProps = {
  onAddToCart: null,
};

export default MealItemForm;
