import React from 'react';
import './App.css';

import Home from './pages/HomePage';
import SheetMusic from './pages/SheetMusicPage';
import SingleSheetMusic from './pages/SingleSheetMusicPage';
import Error from './pages/ErrorPage';

import Navbar from './components/Navbar';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sheetmusic" component={SheetMusic} />
        <Route exact path="/sheetmusic/:id" component={SingleSheetMusic} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
