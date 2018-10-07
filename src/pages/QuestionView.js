import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import Header from '../components/Header/Header';
import List from '../components/List/List.js';
import json from '../dummy/db.json';
class QuestionView extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <Header>
                    Rejestracja na Warsztaty
                </Header>
                <DescriptionBox>
                    Zarejestruj się na mega warsztaty
                </DescriptionBox>
                <List json={json}/>
            </div>
        );
    }
}

export default QuestionView;
