import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { store } from '../core';
import { Nav, Footer } from '.';

const RootApp = ({ content = () => null }) => (
  <Provider store={store}>
    <div>
      <Nav />
      <div className="content">
        {content()}
      </div>
      <Footer />
    </div>
  </Provider>
);

export default RootApp;

