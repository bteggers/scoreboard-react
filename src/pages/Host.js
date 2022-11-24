import React from 'react';
import { useState, useEffect } from 'react';
import {Component} from 'react';
import PiggyBank from '../icons/piggy-bank_w.svg';
import Roll from "../components/Roll.js";
import BankScore from "../components/BankScore.js";

class Host extends Component {
    constructor(props) {
        super(props);
        this.rollNumber = 0;
        this.rollNum = this.rollNum.bind(this);
        this.resetRound = this.resetRound.bind(this);
        this.setPlayerScore = this.setPlayerScore.bind(this);
        
    }
    
    rollNum(num) {
        if (num === "x2") {
            if (this.rollNumber < 3) {
                return;
            }
            this.props.setRoundScore(this.props.roundScore*2);
        }
        else if(num === 7) {
            if (this.rollNumber < 3) {
                this.props.setRoundScore(this.props.roundScore + 70);
            }
            else {
                this.resetRound();
                return;
            }
        }
        else {
            this.props.setRoundScore(this.props.roundScore + num);
        }
        this.rollNumber += 1;
    }
    
    resetRound() {
        this.props.setRoundScore(0);
        this.rollNumber = 0;
        let oldList = this.props.players;
        this.props.setPlayers(oldList.map(player => {player.stillIn = true; return player;}))
    }
    
    setPlayerScore(playerNum) {
        let oldList = this.props.players;
        if (oldList[playerNum].stillIn) {
            oldList[playerNum].score += this.props.roundScore;
            oldList[playerNum].stillIn = false;
            this.props.setPlayers([...oldList]);
            console.log(this.props.players);
        }
    }
    
    render () {
        let rollButtons = [];
        for(let i = 2; i <= 12; i++) {
            rollButtons.push(<Roll value = {i} rollNum = {this.rollNum} />)
        }
        let playerButtons = [];
        for(let i = 0; i <= 4; i++) {
            playerButtons.push(<BankScore player = {i} isIn = {this.props.players[i].stillIn} name = {this.props.players[i].name} score = {this.props.players[i].score} setPlayerScore = {this.setPlayerScore}/>)
        }
        return (<div className = "main split">
            <div className = "side">
                <h2>Points on the Board</h2>
                <h1>{this.props.roundScore}</h1>
                <div className = "button-range small">
                    {rollButtons}
                    <Roll value = {"x2"} rollNum = {this.rollNum} />
                </div>
            </div>
            <div className = "side">
                <h2>Bank</h2>
                <div className = "button-range small ordered">
                    {playerButtons}
                </div>
            </div>
                
            </div>);
        };
};

export default Host;