import React from 'react';
import OrdersTable from './OrdersTable';

export default function Orders() {
  return (
    <div className='flex-col border-t border-soft-gray'>
      <div className='m-10 '>
        <div className='flex'>
          <img src='/Vector.png' className='self-center mr-2 w-6' alt='Imagem de mãos dadas' />
          <span className='font-bold text-2xl text-dark-blue'>Notas fiscais</span>
        </div>
        <p className='mb-5 text-gray-darkish text-sm'>
          Visualize as notas fiscais que você tem.
        </p>
        <OrdersTable />
      </div>
    </div>
  )
}