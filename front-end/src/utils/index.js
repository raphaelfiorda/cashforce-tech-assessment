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
  }
}

export default utils;