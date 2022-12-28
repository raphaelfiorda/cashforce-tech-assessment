import React from 'react';
import OrdersPage from '../pages/orders';
import { Routes, Route } from 'react-router-dom';

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={ <OrdersPage /> } />
    </Routes>
  );
}

export default Routers;
