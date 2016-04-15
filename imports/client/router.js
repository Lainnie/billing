import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { RootApp, Home } from './components';

FlowRouter.route('/', {
  name: 'homepage',
  action: () => {
    mount(RootApp, {
      content: () => <Home />
    })
  }
});

FlowRouter.route('/bernard', {
  name: 'bernard',
  action: () => {
    mount(RootApp, {
      content: () => <div>Bernard </div>
    })
  }
});
