import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import Store from '../store';
import Nav from './nav';
import Footer from './footer';

const RootApp = ({ content = () => null }) => (
  <Provider store={Store}>
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

