import React from 'react'
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <center>
        <h2>Funcionalidades en desarrollo!</h2>
      </center>
      <p>
        <Link to="/">Vuelve al inicio</Link>
      </p>
    </div>
  );
}

export default NoMatch