import React from 'react';
import './Error.css';

const Error = ({ fetchStatus }) => {
  let message;

  switch (fetchStatus) {
    case 404:
      message = 'Page not found.';
      break;
    case 500:
      message = 'Oops! Something\'s broken on our end. Please try again later.';
      break;
    default:
      message = 'Oops! Something went wrong. Please try again.';
  }

  return (
    <div className="error">
      <img className="error__img" src="../../../tomatillo.svg" alt="tomatillo" />
      <p className="error__message">{message}</p>
    </div>
  );
};

export default Error;
