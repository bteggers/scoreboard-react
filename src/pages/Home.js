import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ScoreboardLogo from '../icons/scoreboard.svg';
import PiggyBank from '../icons/piggy-bank_w.svg';
import Raven from '../icons/raven_w.svg';
import Cards from '../icons/cards_w.svg';
import Enter from '../icons/enter_w.svg';
import Meeple from '../icons/pawns_w.svg';

const Home = () => {
    return (
        <div className = "main">
            <img src={ScoreboardLogo}  alt="logo"/>
            <h2>Start Game!</h2>
            <div className = "button-range">
                <Link to="/host" className="nav-link">
                    <div className = "button">
                        <img src={PiggyBank} alt="Bank"/>
                        <h3>Bank</h3>
                    </div>
                </Link>
            
                <div className = "button">
                    <img src={Raven} alt="Rook"/>
                    <h3>Rook</h3>
                </div>
            
                <div className = "button">
                    <img src={Cards} alt="Cards"/>
                    <h3>Nertz</h3>
                </div>
            
                <div className = "button">
                    <img src={Meeple} alt="Meeple"/>
                    <h3>Other</h3>
                </div>
            </div>
            
            <h2>Join Game!</h2>
            <div className = "button-range">
                <div className = "input-field">
                    <p>Type room code|</p>
                </div>
                <a href="bank/spectator.html">
                    <div className = "button">
                        <img src={Enter} alt="Enter"/>
                        <h3>Enter</h3>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Home;