import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

/**
 * Meridian Design System — Badge
 *
 * Variants: default | primary | success | warning | error
 * Shows status, labels, or counts inline
 */
const Badge = ({
  variant = 'default',
  children,
  dot = false,
  ...props
}) => {
  const classes = [
    'meridian-badge',
    `meridian-badge--${variant}`,
    dot ? 'meridian-badge--dot' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {dot && <span className="meridian-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
};

Badge.propTypes = {
  variant:  PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error']),
  children: PropTypes.node.isRequired,
  dot:      PropTypes.bool,
};

export default Badge;
