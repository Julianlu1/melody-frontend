import React from 'react';
import './App.css';

import Home from './pages/HomePage';
import SheetMusic from './pages/SheetMusicPage';
import SingleSheetMusic from './pages/SingleSheetMusicPage';
import Error from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <h1>Melody</h1>
      <Home />
      <SheetMusic />
      <SingleSheetMusic />
      <Error />
    </div>
  );
}

export default App;
