import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Orders from '../components/Orders';
import Sider from '../components/Sider';

export default function OrdersPage() {
  return (
    <div className='flex'>
      <Sider />
      <Header />
      <Orders />
    </div>
  );
}