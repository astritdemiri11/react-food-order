import PropTypes from 'prop-types';
import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  const closeHandler = (event) => {
    if (onClose) {
      onClose(event);
    }
  };

  return (
    <Modal onClose={closeHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={closeHandler}>
          Close
        </button>
        {hasItems && <button type="button" className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
};

Cart.defaultProps = {
  onClose: null,
};

export default Cart;
