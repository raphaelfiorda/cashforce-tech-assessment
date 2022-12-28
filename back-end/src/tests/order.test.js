const Sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Order } = require('../database/models');
const { dbResponse, responseMock } = require('./orderMocks');

const app = require('../api');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a integração da rota /', () => {
  describe('Verifica a camada de listagem', async () => {
    afterEach(() =>  Sinon.restore());

    it('Retorna status 200 e o response correto', async () => {
      Sinon.stub(Order, 'findAll').resolves(dbResponse);
      const response = await chai.request(app)
        .get('/');

        const { status, body } = response;
        console.log({ status, body });
        expect(status).to.equal(200);
        expect(JSON.stringify(body)).to.equal(JSON.stringify(responseMock));
    });
  });
});