import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Spectator from "./pages/Spectator.js";
import Scoreboard from "./pages/Scoreboard.js";
import Host from "./pages/Host.js";
import NoPage from "./pages/NoPage.js";

export default function App() {
  
  const [players, setPlayers] = useState([{name: "Joel", score: 0, stillIn: true},
                                          {name: "Rob", score: 0, stillIn: true},
                                          {name: "Annette", score: 0, stillIn: true},
                                          {name: "Christy", score: 0, stillIn: true},
                                          {name: "Braden", score: 0, stillIn: true}
                                          ]);
  const [roundScore, setRoundScore] = useState(0);
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Host" element={<Host players={players} setPlayers = {setPlayers} roundScore = {roundScore} setRoundScore = {setRoundScore}/>} />
          <Route path="Spectator" element={<Spectator />} />
          <Route path="Scoreboard" element={<Scoreboard />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="footer">
      <p>Made by Bryce Eggers, link to <a href="https://bteggers@github.com/bteggers/scoreboard-react.git">Github</a></p>
    </div>
    </div>
  );
}
