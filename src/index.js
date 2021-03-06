import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import App from './App';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import VerifyEmailPage from './components/VerifyEmailPage';
import RegisterPage from './components/RegisterPage';
import ChangePasswordPage from './components/ChangePasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';
import DashboardPage from './components/DashboardPage';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={App}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/change' component={ChangePasswordPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <Route path='/contact' component={ContactPage} />
      <AuthenticatedRoute>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/dashboard' component={DashboardPage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('page-content-wrapper')
);
