import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/details" exact component={PostDetails} />
        </Switch>
    </BrowserRouter>
  )
};

export default App;
