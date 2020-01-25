import React from "react";
import PropTypes from "prop-types";

function Info({ text, href, target, color }) {
  return (
    <a className={`block p-2 bg-${color}-500 hover:bg-${color}-600 text-${color}-100 border-b font-bold text-center`} href={href} rel="noopener" target={target} role="alert">{text}</a>
  );
}

Info.defaultProps = {
  color: 'indigo',
  href: '/',
  target: '_blank',
  text: 'Hey!'
};

Info.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string
};

export default Info;