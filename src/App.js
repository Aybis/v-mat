import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Layout from './components/includes/Layout';
import Fabric from './components/pages/Fabric';
import Index from './components/pages/Index';

function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/fabric" component={Fabric} />
          {/* <Route exact path="/manage-fabric" component={Index} /> */}
          {/* <Route exact path="/vlan-configuration" component={Index} /> */}
          {/* <Route exact path="/ospf-configuration" component={Index} /> */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
