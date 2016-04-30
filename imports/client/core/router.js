import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { RootApp, Home } from '../components';
import {
  Companies,
  Billings
} from '../containers';

FlowRouter.route('/', {
  name: 'homepage',
  action: () => {
    mount(RootApp, {
      content: () => <Home />
    })
  }
});

FlowRouter.route('/compagnies', {
  name: 'compagnies',
  action: () => {
    mount(RootApp, {
      content: () => <Companies />
    })
  }
});

FlowRouter.route('/billings', {
  name: 'billings',
  action: () => {
    mount(RootApp, {
      content: () => <Billings />
    })
  }
});
