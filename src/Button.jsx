import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Meridian Design System — Button
 *
 * Variants: primary | secondary | ghost | destructive
 * Sizes:    sm | md | lg
 * States:   default | hover | disabled | loading
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const classes = [
    'meridian-btn',
    `meridian-btn--${variant}`,
    `meridian-btn--${size}`,
    loading ? 'meridian-btn--loading' : '',
    fullWidth ? 'meridian-btn--full' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <span className="meridian-btn__spinner" aria-hidden="true" />
      )}
      {!loading && iconLeft && (
        <span className="meridian-btn__icon meridian-btn__icon--left">
          {iconLeft}
        </span>
      )}
      <span className="meridian-btn__label">{children}</span>
      {!loading && iconRight && (
        <span className="meridian-btn__icon meridian-btn__icon--right">
          {iconRight}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  variant:   PropTypes.oneOf(['primary', 'secondary', 'ghost', 'destructive']),
  size:      PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled:  PropTypes.bool,
  loading:   PropTypes.bool,
  iconLeft:  PropTypes.node,
  iconRight: PropTypes.node,
  children:  PropTypes.node.isRequired,
  onClick:   PropTypes.func,
  type:      PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
