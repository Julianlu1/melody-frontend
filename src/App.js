import React from 'react';
import './App.css';

import Home from './pages/HomePage';
import SheetMusic from './pages/SheetMusicPage';
import SingleSheetMusic from './pages/SingleSheetMusicPage';
import DashboardPage from './pages/DashboardPage'
import Register from './components/Register';
import Error from './pages/ErrorPage';


import Navbar from './components/Navbar';

import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './protected.route.js';

function App() {
  const token = window.sessionStorage.getItem('token');
  return (
    <div className="App">
      <Navbar {...{ token }} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sheetmusic" component={SheetMusic} />
        <Route exact path="/sheetmusic/:id" component={SingleSheetMusic} />
        <Route exact path="/register" component={Register} />
        {/* Verander <Route naar <Protectedroute */}
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
