import PropTypes from 'prop-types';

import classes from './CartItem.module.css';

const CartItem = ({
  amount, name, price, onAdd, onRemove,
}) => {
  const priceDisplay = `$${price.toFixed(2)}`;

  const addHandler = (event) => {
    if (onAdd) {
      onAdd(event);
    }
  };

  const removeHandler = (event) => {
    if (onRemove) {
      onRemove(event);
    }
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceDisplay}</span>
          <span className={classes.amount}>
            x
            {amount}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={removeHandler}>−</button>
        <button type="button" onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

CartItem.defaultProps = {
  onAdd: null,
  onRemove: null,
};

export default CartItem;
