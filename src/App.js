import React from 'react';
import './App.css';
import Customerslist from './components/Customerslist';
import Trainingslist from './components/Trainingslist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';


function App() {
  return (
    <div className="App">
<AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" noWrap>
            Personal Trainer
          </Typography>
      
        </Toolbar>
      </AppBar>


      <Customerslist />
      <Trainingslist />
    </div>
  );
}

export default App;
