import PropTypes from 'prop-types';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  const clickHandler = (event) => {
    if (onShowCart) {
      onShowCart(event);
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={clickHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func,
};

Header.defaultProps = {
  onShowCart: null,
};

export default Header;
