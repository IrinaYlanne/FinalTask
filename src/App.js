import React from 'react';
import './App.css';
import Customerslist from './components/Customerslist';
import Trainingslist from './components/Trainingslist';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'



function App() {


    return (
        <div className="App">
          <BrowserRouter>
    
                <div>
                  <Link to="/">Customers</Link> {''}
                  <Link to="/trainingslist">Trainigs</Link> {''}
                  
                        <Switch>
                            <Route exact path="/" component={Customerslist} />
                            <Route path="/trainingslist" component={Trainingslist} />
                        </Switch>
    
                </div>
          </BrowserRouter>
    
        </div>
      );
    }
    
    export default App;