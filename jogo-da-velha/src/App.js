import React from 'react';
import './App.css';
import Profile from './img/player-o.png'

import Checkbox from './objects/Checkbox';
import Header from './components/Header';
import Hashtag from "./components/Hashtag";
import AboutScreen from "./objects/AboutScreen";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => (
      <main className="app">
          <Header />
          <Hashtag />
          <Checkbox id={"show"} value={"show"} content={"Mostrar eventos"}/>
          <AboutScreen>
              <HeaderInternal/>
              <ProfileUser src={Profile}/>
          </AboutScreen>
      </main>
)

export default App;
