import React from 'react';

const Spectator = () => {
  return (
        <div class = "main split">
            <div class = "side">
                <div class = "ordered">
                    <h2>Current Scores</h2>
                    <div class = "score">
                        <h3>Joel</h3>
                        <p>440</p>
                    </div>
                    <div class = "score">
                        <h3>Rob</h3>
                        <p>350</p>
                    </div>
                    <div class = "score">
                        <h3>Annette</h3>
                        <p>270</p>
                    </div>
                    <div class = "score">
                        <h3>Christy</h3>
                        <p>60</p>
                    </div>
                    <div class = "score">
                        <h3>Braden</h3>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div class = "side">
                <h2>Round 4</h2>
                <h3>You are currently</h3>
                <h1>380</h1>
                <h3>points behind the leader with</h3>
                <h1>257</h1>
                <h3>points on the board.</h3>
            </div>
        </div>);
};

export default Spectator;