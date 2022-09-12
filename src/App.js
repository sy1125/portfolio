import * as React from 'react'
import { Reset } from 'styled-reset'
import Main from './components/Main';
import MyStory from './components/MyStory';
import Technic from './components/Technic';
import './App.css';
import Career from './components/Career';
import Project from './components/Project';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <Main />
        <MyStory />
        <Technic />
        <Career />
        <Project />
      </div>
    </React.Fragment>
  );
}

export default App;
