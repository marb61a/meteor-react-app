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
        this.state = {players : [
        ]};
    }
    
    componentWillMount(){
        this.setState({players : [
        {
            _id: 1,
            name: "Manny Henri",
            ballManipulation: 2,
            kickingAbilities: 3,
            passingAbilities: 1,
            duelTackling: 1,
            fieldCoverage: 3,
            blockingAbilities: 2,
            gameStrategy: 3,
            playmakingRisks: 2,
        },
        {
            _id: 2,
            name: "Speedy Gonz",
            ballManipulation: 2,
            kickingAbilities: 3,
            passingAbilities: 1,
            duelTackling: 1,
            fieldCoverage: 3,
            blockingAbilities: 2,
            gameStrategy: 3,
            playmakingRisks: 2,
        },
        {
            _id: 3,
            name: "Tracey Good",
            ballManipulation: 2,
            kickingAbilities: 3,
            passingAbilities: 1,
            duelTackling: 1,
            fieldCoverage: 3,
            blockingAbilities: 2,
            gameStrategy: 3,
            playmakingRisks: 2,
        }    
        ]});    
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
                    <AppBar 
                        title="Football App"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}/>
                    <div className="row">
                        <div className="col s12 m7" >
                            <Player />
                        </div>
                        <div className="col s12 m5" >
                            <h2>Team List</h2>
                            <divider>
                                <list>
                                    {this.renderPlayers()}
                                </list>
                            </divider>
                        </div>
                        <div className="col s12 m5" >
                            <TeamStats/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>    
        );
    }
}