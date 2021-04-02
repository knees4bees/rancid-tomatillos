import React from 'react';
import './Error.css';

const Error = ({ message }) => {
  return (
    <div className="error">
      <img className="error__img" src="../../../tomatillo.svg" alt="tomatillo" />
      <p className="error__message">{message}</p>
    </div>
  );
};

export default Error;
