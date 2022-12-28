import React from 'react';
import OrdersTable from './OrdersTable';

export default function Orders() {
  return (
    <div className='flex-col border-t'>
      <div className='mx-16 mt-10 '>
        <div className='flex'>
          <img src='/Vector.png' className='self-center mr-2 w-6'/>
          <span className='font-bold text-2xl text-dark-blue'>Notas fiscais</span>
        </div>
        <p className='text-gray-darkish text-sm'>Visualize as notas fiscais que você tem.</p>
        <OrdersTable />
      </div>
    </div>
  )
}