import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from 'components/authentication/split/Login';
import Logout from 'components/authentication/split/Logout';
import Registration from 'components/authentication/split/Registration';
import ForgetPassword from 'components/authentication/split/ForgetPassword';
import PasswordReset from 'components/authentication/split/PasswordReset';
import ConfirmMail from 'components/authentication/split/ConfirmMail';
import LockScreen from 'components/authentication/split/LockScreen';

const AuthSplitRoutes = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/login`} exact component={Login} />
      <Route path={`${url}/logout`} exact component={Logout} />
      <Route path={`${url}/register`} exact component={Registration} />
      <Route path={`${url}/forgot-password`} exact component={ForgetPassword} />
      <Route path={`${url}/reset-password`} exact component={PasswordReset} />
      <Route path={`${url}/confirm-mail`} exact component={ConfirmMail} />
      <Route path={`${url}/lock-screen`} exact component={LockScreen} />

      {/*Redirect*/}
      <Redirect to="/errors/404" />
    </Switch>
  );
};

export default AuthSplitRoutes;
