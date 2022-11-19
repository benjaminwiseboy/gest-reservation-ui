import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Clients from './components/client/Clients';
import Hebergements from './components/hebergement/Hebergements';
import Reservations from './components/reservation/Reservations';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {

  return (
   
    <Router>
      <div>
        <Navigation/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="clients/*" element={<Clients />} />
          <Route path="hebergements/*" element={<Hebergements />} />
          <Route path="reservations/*" element={<Reservations />} />
      </Routes>
    
      </div>
    </Router>
   
  );
}

export default App;
