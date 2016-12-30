import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component{
    constructor(props){
        super(props);
        
        // Set up state
        this.state = {players : []};
    }
    
    componentWillMount(){
        this.setState({});    
    }
    
    renderPlayers(){
        return this.state.players.map((player) => {
            <TeamList key={player._id} player={player} />;
        });
    }
    
    render(){
        return(
            <MuiThemeProvider>
                <div className="container">
                
                </div>
            </MuiThemeProvider>    
        );
    }
}