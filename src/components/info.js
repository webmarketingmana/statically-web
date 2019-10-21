import React from "react";
import PropTypes from "prop-types";

function Info({ text, href, target, color }) {
  return (
    <a className={`block p-2 bg-${color}-600 hover:bg-${color}-700 text-${color}-100 border-b border-${color}-800 hover:border-${color}-900 text-center`} href={href} target={target} role="alert">{text}</a>
  );
}

Info.defaultProps = {
  color: 'blue',
  href: '/',
  target: '_self',
  text: 'Hey!'
};

Info.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string
};

export default Info;