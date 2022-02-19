import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from 'components/authentication/card/Login';
import Logout from 'components/authentication/card/Logout';
import Registration from 'components/authentication/card/Registration';
import ForgetPassword from 'components/authentication/card/ForgetPassword';
import ConfirmMail from 'components/authentication/card/ConfirmMail';
import PasswordReset from 'components/authentication/card/PasswordReset';
import LockScreen from 'components/authentication/card/LockScreen';

const AuthCardRoutes = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/login`} exact component={Login} />
      <Route path={`${url}/register`} exact component={Registration} />
      <Route path={`${url}/logout`} exact component={Logout} />
      <Route path={`${url}/forgot-password`} exact component={ForgetPassword} />
      <Route path={`${url}/reset-password`} exact component={PasswordReset} />
      <Route path={`${url}/confirm-mail`} exact component={ConfirmMail} />
      <Route path={`${url}/lock-screen`} exact component={LockScreen} />

      {/*Redirect*/}
      <Redirect to="/errors/404" />
    </Switch>
  );
};

export default AuthCardRoutes;
