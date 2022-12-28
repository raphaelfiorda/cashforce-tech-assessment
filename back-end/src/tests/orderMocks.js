module.exports = {
  dbResponse: [
    {
      orderNumber: "18153",
      emissionDate: "2020-10-30T11:00:00-03:00",
      value: "198450",
      orderStatusBuyer: "0",
      buyer: {
        name: "SACADO 001"
      },
      provider: {
        name: "CEDENTE 002"
      }
    },
    {
      orderNumber: "18157",
      emissionDate: "2020-11-04T15:32:35-02:00",
      value: "168850",
      orderStatusBuyer: "0",
      buyer: {
        name: "SACADO 001"
      },
      provider: {
        name: "CEDENTE 002"
      }
    },
    {
      orderNumber: "18184",
      emissionDate: "2020-11-10",
      value: "222795",
      orderStatusBuyer: "7",
      buyer: {
        name: "SACADO 001"
      },
      provider: {
        name: "CEDENTE 002"
      }
    }
  ],
  responseMock: [
    {
      notaFiscal: '18153',
      sacado: 'SACADO 001',
      cedente: 'CEDENTE 002',
      emissao: '2020-10-3',
      valor: '198450'
    },
    {
      notaFiscal: '18157',
      sacado: 'SACADO 001',
      cedente: 'CEDENTE 002',
      emissao: '2020-11-0',
      valor: '168850'
    },
    {
      notaFiscal: '18184',
      sacado: 'SACADO 001',
      cedente: 'CEDENTE 002',
      emissao: '2020-11-1',
      valor: '222795'
    }
  ]
}

