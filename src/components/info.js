import React from "react";
import PropTypes from "prop-types";

function Info({ text, href, target }) {
  return (
    <a className="block p-2 bg-indigo-600 hover:bg-indigo-700 text-indigo-100 border-b font-bold text-center" href={href} rel="noopener noreferrer" target={target} role="alert">{text}</a>
  );
}

Info.defaultProps = {
  href: '/wordpress/',
  target: '_self',
  text: 'Statically + WordPress integration is finally here!'
};

Info.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string
};

export default Info;