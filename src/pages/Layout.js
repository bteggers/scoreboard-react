import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import ScoreboardLogoW from '../icons/scoreboard_w.svg';

const Layout = () => {
    let location = useLocation().pathname;
    console.log(location);
    if(location !== "/" && location !== "/about") {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <img src={ScoreboardLogoW} alt="Scoreboard Logo" id="corner-logo"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/scoreboard" className="nav-link">Scoreboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/host" className="nav-link">Host</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/spectator" className="nav-link">Spectator</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Exit Game</Link>
                            </li>
                        </ul>
                    </div>
                </nav>     <Outlet />
            </>
        )
    }
    else {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <img src={ScoreboardLogoW} alt="Scoreboard Logo" id="corner-logo"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>     <Outlet />
            </>
        )
    }
};

export default Layout;