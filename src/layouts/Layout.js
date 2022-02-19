import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthSimpleLayout from './AuthSimpleLayout';
import is from 'is_js';
import MainLayout from './MainLayout';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import SettingsPanel from 'components/settings-panel/SettingsPanel';
import AuthCardRoutes from 'components/authentication/card/AuthCardRoutes';
import AuthSplitRoutes from 'components/authentication/split/AuthSplitRoutes';

import ErrorLayout from './ErrorLayout';
import WizardAuth from 'components/authentication/wizard/WizardAuth';
import Landing from 'components/pages/landing/Landing';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from 'components/common/Toast';

const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/errors" component={ErrorLayout} />
        <Route path="/authentication/simple" component={AuthSimpleLayout} />
        <Route path="/authentication/card" component={AuthCardRoutes} />
        <Route path="/authentication/split" component={AuthSplitRoutes} />
        <Route path="/authentication/wizard" component={WizardAuth} />
        <Route component={MainLayout} />
        <Redirect to="/errors/404" />
      </Switch>
      <SettingsToggle />
      <SettingsPanel />
      <ToastContainer
        transition={Fade}
        closeButton={CloseButton}
        closeOnClick
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
};

export default Layout;
