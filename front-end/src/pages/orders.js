import React from 'react';
import Header from '../components/Header';
import Orders from '../components/Orders';
import Sider from '../components/Sider';

export default function OrdersPage() {
  return (
    <div className='flex'>
      <Sider />
      <div className='w-full'>
        <Header />
        <Orders />
      </div>
    </div>
  );
}