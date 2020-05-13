import React from 'react';
import './App.css';
import Customerslist from './components/Customerslist';
import Workoutlist from './components/Workoutlist';
import Calendar from './components/Calendar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function App() {


    return (
        <div className="App">
          

    


          <BrowserRouter>
          <AppBar position="static" >
       <Toolbar> <Typography variant= "h6">Personal Trainer</Typography>
       <Button variant="contained" color="primary" href="/">
                  Customers
                  </Button>

                  <Button variant="contained" color="primary" href="/workoutforyou">
                  In progress
                  </Button>

                  <Button variant="contained" color="primary" href="/calendar">
                  Calendar
                  </Button>
       </Toolbar>
      </AppBar>
         


             


                <div>                      
   
                           <Switch>
                            <Route exact path="/" component={Customerslist} />                                               
                            <Route path="/workoutforyou" component={Workoutlist} />
                            <Route path="/calendar" component={Calendar} />
                        </Switch>
    
                </div>
          </BrowserRouter>
  
        </div>
      );
    }
    
    export default App;