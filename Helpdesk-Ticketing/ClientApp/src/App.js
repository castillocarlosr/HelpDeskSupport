import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { LoginView } from './components/LoginView';
import { Registration } from './components/Registration';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />

            <Route path='/login-view' component={LoginView} />

            <Route path='/register' component={Registration} />
      </Layout>
    );
  }
}
