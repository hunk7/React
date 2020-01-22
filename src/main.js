import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/Header' component={Header}></Route>
      <Route exact path='/Content' component={Content}></Route> 
      <Route exact path='/Footer' component={Footer}></Route>
    </Switch>
  );
}

export default Main; 