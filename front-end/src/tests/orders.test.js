import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import apiResponse from './ordersMocks';

const server = setupServer(
  rest.get('/', (_req, res, ctx) => {
    return res(
      ctx.json(apiResponse)
    );
  }),
)



describe('Testa a página de notas fiscais', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('Verifica se os elementos da página são rendereizados como esperado', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
  })
})