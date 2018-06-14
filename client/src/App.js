

import React, { Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Nav from './components/Nav';
import Food from './components/Food';



const App = () => (
  <Fragment>
    <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component="/" component={NoMatch} />
        <Route exact path ="/foods/:id" componet={Food} />
      </Switch>
  </Fragment>  
);


export default App;
