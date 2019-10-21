import React from "react";
import PropTypes from "prop-types";

function Info({ text, href, target }) {
  return (
    <a className="block p-2 bg-orange-600 hover:bg-orange-700 text-orange-100 border-b border-orange-800 hover:border-orange-900 text-center" href={href} target={target} role="alert">{text}</a>
  );
}

Info.defaultProps = {
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