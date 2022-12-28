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
          <tr className=''>
            {
              ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS', '']
                .map((tableHead, id) => <th key={id} className='text-left py-4 pl-4'>{tableHead}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            orders &&
              orders.map((order, id) => (
                <tr key={id} className=''>
                  <td className='py-4 pl-4'>{order.notaFiscal}</td>
                  <td className='py-4 pl-4'>{order.cedente}</td>
                  <td className='py-4 pl-4'>{order.sacado}</td>
                  <td className='py-4 pl-4'>{order.emissao}</td>
                  <td className='py-4 pl-4'>{order.valor}</td>
                  <td className='py-4 pl-4'>status</td>
                  <td className='py-4 text-right'>
                    <button>Dados do cedente</button>
                  </td>
                </tr>
              ))
          }
        </tbody>

      </table>
  )
}