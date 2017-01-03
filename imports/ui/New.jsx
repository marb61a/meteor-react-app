import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Players } from '../api/players';

export default class Example extends Component {
    submitPlayer(event){
        event.preventDefault();
        
        Players.insert({
            name : this.refs.name.value,
            team : this.refs.team.value,
            notes : this.refs.notes.value,
            createdAt : new Date()
        });
        
        console.log("Success player submitted!");
    
        browserHistory.push('/');
    }
    
    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <h3>Add a new player</h3>
                </form>
            </div>        
        );
    }
}