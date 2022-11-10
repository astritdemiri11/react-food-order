import PropTypes from 'prop-types';

import classes from './Card.module.css';

const Card = ({ children }) => (
  <div className={classes.card}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
