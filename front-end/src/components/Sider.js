import React from 'react';

export default function Sider() {
  return (
    <aside className='h-screen bg-nimble-white'>
      <div className='w-72'>
        <img src='/cashforce_logo.png' className='self-center' alt='Logo da Cashforce' />
      </div>
      <div className='flex h-20 border-l-4 border-main-green pl-6 items-center'>
        <div className='font-medium text-main-green'>
          <img
            src='/Vector.png'
            className='inline-block self-center mr-4 w-6'
            alt='Imagem de mãos dadas fechando um negócio'
          />
          <span className='font-medium text-sm'>Notas fiscais</span>
        </div>
      </div>
    </aside>
  )
}