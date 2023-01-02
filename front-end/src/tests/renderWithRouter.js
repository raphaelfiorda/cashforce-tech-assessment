import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import Routers from '../routes/routes';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Routers history={ history }>
        { component }
      </Routers>
    ),
    history,
  });
};

export default renderWithRouter;