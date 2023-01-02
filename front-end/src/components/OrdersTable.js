import React, { useState, useEffect } from 'react';
import { getOrders } from '../service/api';
import utils from '../utils';

const { dateParser, currencyFormatter, getStatus } = utils;

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
    <ul className='flex-col space-y-4 w-full'>
        <li className='flex justify-between font-bold pl-2 text-xs text-gray'>
          {
            ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS', '']
              .map((tableHead, id) => (
              <div key={id} className='basis-1/6 p-2'>{tableHead}</div>)
              )
          }
        </li>
        {
          orders &&
            orders.map((order, id) => (
              <li key={id}
                className={'border border-nimble-gray flex justify-between' +
                'font-medium p-2 rounded-md text-sm text-dark-gray'
              }
              >
                <div className='basis-1/6 p-2'>{order.notaFiscal}</div>
                <div className='basis-1/6 p-2'>{order.sacado}</div>
                <div className='basis-1/6 p-2'>{order.cedente}</div>
                <div className='basis-1/6 p-2'>{dateParser(order.emissao)}</div>
                <div className='basis-1/6 p-2 text-main-green'>
                  {currencyFormatter({value: order.valor, currency: 'BRL'})}
                </div>
                <div className='basis-1/6 font-bold p-2 text-xs text-main-green'>
                  { getStatus(order.status) }
                </div>
                <div className='basis-1/6 font-bold text-gray-darkish text-right text-xs'>
                  <button className='border border-soft-blue rounded-3xl py-2 px-6'>
                    Dados do cedente
                  </button>
                </div>
              </li>
            ))
        }

    </ul>
  )
}