import React, { useState, useEffect } from 'react';
import { getOrders } from '../service/api';

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  // componentDidMount hooks
  useEffect(
    () => {
      const fetchOrders = async () => {
        const result = await getOrders();
        setOrders(result);
      };
      fetchOrders();
    }, [],
  )

  return (
      <table className='border-separate border-spacing-4 w-full'>
        <thead>
          <tr className='font-bold text-xs text-gray'>
            {
              ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS', '']
                .map((tableHead, id) => (
                <th key={id} className='text-left py-2 pl-2'>{tableHead}</th>)
                )
            }
          </tr>
        </thead>
        <tbody>
          {
            orders &&
              orders.map((order, id) => (
                <tr key={id} className='font-medium text-sm text-dark-gray'>
                  <td className='py-2 pl-2'>{order.notaFiscal}</td>
                  <td className='py-2 pl-2'>{order.sacado}</td>
                  <td className='py-2 pl-2'>{order.cedente}</td>
                  <td className='py-2 pl-2'>{order.emissao}</td>
                  <td className='py-2 pl-2 text-main-green'>{order.valor}</td>
                  <td className='font-bold py-2 pl-2 text-xs text-main-green'>RECEBIDO</td>
                  <td className='font-bold py-2 text-xs text-right'>
                    <button>Dados do cedente</button>
                  </td>
                </tr>
              ))
          }
        </tbody>

      </table>
  )
}