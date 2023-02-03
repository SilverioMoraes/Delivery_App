import PropTypes from 'prop-types';

export default function Label({
  children,
  htmlFor,
  className,
  text,
}) {
  return (
    <label
      htmlFor={ htmlFor }
      style={ { width: '372px' } }
      className={
        `d-flex flex-column justify-content-center align-items-center p-0 mt-3
        ${className}`
      }
    >
      <span className="align-self-start">
        { text }
      </span>
      {children}
    </label>
  );
}

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
