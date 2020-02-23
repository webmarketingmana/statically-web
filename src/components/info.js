import React from "react";
import PropTypes from "prop-types";

function Info({ text, href, target, color }) {
  return (
    <a className={`block p-2 bg-indigo-500 hover:bg-indigo-600 text-indigo-100 border-b font-bold text-center`} href={href} rel="noopener noreferrer" target={target} role="alert">{text}</a>
  );
}

Info.defaultProps = {
  href: '/wordpress/',
  target: '_self',
  text: 'Statically + WordPress integration is finally here!'
};

Info.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string
};

export default Info;