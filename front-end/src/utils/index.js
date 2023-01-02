const utils = {
  dateParser: (date) => {
    const splited = date.split('-').reverse();
    const parsed = splited.join('/');

    return parsed;
  },

  currencyFormatter: ({value, currency}) => {
    const result = new Intl.NumberFormat('pt-BR', { style: 'currency', currency })
      .format(value);

    return result;
  },

  getStatus: (buyerStatus) => {
    const dict = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido',
      'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial',
      'Recebida e confirmada', 'Pagamento Autorizado'];

      return dict[buyerStatus].toUpperCase();
  },
}

export default utils;