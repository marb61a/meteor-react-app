import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
    chip : {
        margin : 4,
    },
    wrapper : {
        display : 'flex',
        flexWrap : 'wrap',
    },
    button : {
        margin : 12,
    },
};

export default class Player extends Component{
    render(){
        const player = this.props.player;
        const defense = player.duelTackling + player.fieldCoverage + player.blockingAbilities + player.gameStrategy + player.playmakingRisks;
        const offense = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.fieldCoverage + player.playmakingRisks;
        const total = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.fieldCoverage + player.playmakingRisks + player.duelTackling + player.blockingAbilities;

        return(
            <Card>
                <CardMedia overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}>
                    <img src="player.jpg" />
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Ball Maniplulation
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Kicking abilities
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Passing abilities
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Duel/Tackling abilities
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Field Speed Coverage
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Blocking Abilities
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Game Strategy
                        </chip>
                        <chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                2
                            </Avatar>
                            Playing Risks
                        </chip>
                    </div>
                </CardText>
                <CardActions>
                </CardActions>
            </Card>        
        );
    }
}