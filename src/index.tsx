import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import AppRouter from './router';
import { AppProvider } from '@components/base/appContext';
import '@components/Veal/Reveal.ts';

import './index.scss';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <AppProvider>
        <Component />
      </AppProvider>
    </AppContainer>,
    document.getElementById('app') as HTMLElement,
  );
};

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}

render(AppRouter);
