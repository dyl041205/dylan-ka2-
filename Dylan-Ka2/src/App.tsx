import React from 'react';
import NavBar from './NavBar';
import  HomePage  from "./HomePage";
import  BiscuitClicker  from "./BiscuitClicker";
import  TemperatureChecker  from "./TemperatureChecker";
import './App.css';
import PATHS from "./PATHS"
import { Routes, Route } from 'react-router-dom'



function App() {
    return (
      <>
        <Routes>
          <Route path={PATHS.INDEX_PATH} element={<NavBar />}>
            <Route path={PATHS.Home_PATH} element={<HomePage />} />
            <Route path={PATHS.ClickerCounter_PATH} element={<BiscuitClicker/>} />
            <Route path={PATHS.TemperatureChecker_PATH} element={<TemperatureChecker />} />
          </Route>
        </Routes>
      </>
    );
  }
  
  export default App;
  