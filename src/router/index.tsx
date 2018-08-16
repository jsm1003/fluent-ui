import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import FdTabs from '@/views/Tabs/Tabs';
import FdVeal from '@/views/Veal/FdVeal';
import FdButton from '@/views/Button/Button';
import FdMenu from '@/views/Menu/Menu';

const Index = () => <div>Index page</div>;

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/tabs" component={FdTabs} />
      <Route exact path="/veal" component={FdVeal} />
      <Route exact path="/button" component={FdButton} />
      <Route exact path="/menu" component={FdMenu} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
