import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCart from '../components/shoppingCart';

const NoMatch = () => {
  return (
    <div>
      <center>
        <h2>Funcionalidades en desarrollo!</h2>
      </center>
      <p>
        <Link to="/">Vuelve al inicio</Link>
      </p>
      <ShoppingCart/>
    </div>
  );
}

export default NoMatch