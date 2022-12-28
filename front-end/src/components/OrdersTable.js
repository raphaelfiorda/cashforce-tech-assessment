import React, { useState, useEffect } from 'react';
import { getOrders } from '../service/api';
import utils from '../utils';

const { dateParser, currencyFormatter } = utils;

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
          <tr className='font-bold text-xs text-gray'>
            {
              ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS', '']
                .map((tableHead, id) => (
                <th key={id} className='text-left p-2'>{tableHead}</th>)
                )
            }
          </tr>
          {
            orders &&
              orders.map((order, id) => (
                <tr key={id} className='font-medium text-sm text-dark-gray'>
                  <td className='p-2'>{order.notaFiscal}</td>
                  <td className='p-2'>{order.sacado}</td>
                  <td className='p-2'>{order.cedente}</td>
                  <td className='p-2'>{dateParser(order.emissao)}</td>
                  <td className='p-2 text-main-green'>
                    {currencyFormatter({value: order.valor, currency: 'BRL'})}
                  </td>
                  <td className='font-bold p-2 text-xs text-main-green'>RECEBIDO</td>
                  <td className='font-bold text-gray-darkish text-right text-xs'>
                    <button className='border border-soft-blue rounded-3xl py-2 px-6'>
                      Dados do cedente
                    </button>
                  </td>
                </tr>
              ))
          }

      </table>
  )
}