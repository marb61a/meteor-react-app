import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import { Players } from '../api/players';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';

const tempPlayer = {
  name: "Temp player",
  team: "Superstars",
  ballManipulation: 2,
  kickingAbilities: 3,
  passingAbilities: 2,
  duelTackling: 1,
  fieldCoverage: 2,
  blockingAbilities: 0,
  gameStrategy: 1,
  playmakingRisks: 2,
  notes: "This player is only temporary",
};

export default class App extends Component{
    constructor(props){
        super(props);
        
        // Set up state
        this.state = {
            currentPlayer : tempPlayer,
            showEditPlayer : false
        };
        
        this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    }
    
    renderPlayers(){
        return this.state.players.map((player) => {
            <TeamList key={player._id} player={player} />;
        });
    }
    
    showEditForm(){
        this.setState({
            showEditPlayer : false
        });
    }
    
    showTeamStats(){
        this.setState({
            showEditPlayer : false
        });
    }
    
    showForm(){
        if (this.state.showEditPlayer === true) {
            return(
                <Edit currentPlayer={this.state.currentPlayer} showTeamStats={this.showTeamStats}/>  
            );
        } else {
            return ( <TeamStats />);    
        }
    }
    
    render(){
        return(
            <MuiThemeProvider>
                <div className="container">
                    <AppBar 
                        title="Football App"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}>
                        <AccountsWrapper />
                    </AppBar>
                    <div className="row">
                        <div className="col s12 m7" >
                            <Player player={this.state.currentPlayer} />
                        </div>
                        <div className="col s12 m5" >
                            <h2>Team List</h2>
                            <Link to="/new" className="waves-effect waves-light btn">
                                Add player
                            </Link>
                            <divider>
                                <list>
                                    {this.renderPlayers()}
                                </list>
                            </divider>
                        </div>
                        <div className="col s12 m5" >
                            {this.showForm}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>    
        );
    }
}

App.propTypes = {
    players: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('players');
    const user = Meteor.userId();
    
    return {
        players : Players.find(
                { owner: user },
                {sort: { name: 1}}
            ).fetch(),
    };
}, App);