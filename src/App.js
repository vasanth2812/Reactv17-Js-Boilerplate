import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './modules/Home';
import Error from './modules/Error';

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </>
);

export default App;
