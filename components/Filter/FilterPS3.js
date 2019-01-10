import React,{Component} from 'react';
import SaleCard from '../SaleCard/SaleCard';
import game4 from '../../img/games/fifa19.jpg';

import {graphql, Query, compose} from 'react-apollo';
import gql from 'graphql-tag';

const getData = gql`
{
    gamePS3{
        name,
        genre,
        PS4,
        XBOX,
        PS3,
        price
      }
      gamePS4{
        name,
        genre,
        PS4,
        XBOX,
        PS3,
        price
      }
      gameXBOX{
        name,
        genre,
        PS4,
        XBOX,
        PS3,
        price
      }
}
`;

class FilterPS3 extends Component{
    constructor(){
        super();
        this.state = {
            actionGames: 'notActive',
            raceGames: 'notActive',
            sportGames: 'notActive',
            adventureGames: 'notActive',
            rpgGames: 'notActive',
        }
    }

    actionGamesClick = (type) => {
        if(type === 'notActive'){
            this.setState({actionGames: 'Active', raceGames: 'notActive', sportGames: 'notActive', adventureGames: 'notActive', rpgGames: 'notActive'});
        }
        else{
            this.setState({actionGames: 'notActive'});
        }
    }
    raceGamesClick = (type) => {
        if(type === 'notActive'){
            this.setState({actionGames: 'notActive', raceGames: 'Active', sportGames: 'notActive', adventureGames: 'notActive', rpgGames: 'notActive'});
        }
        else{
            this.setState({raceGames: 'notActive'});
        }
    }
    sportGamesClick = (type) => {
        if(type === 'notActive'){
            this.setState({actionGames: 'notActive', raceGames: 'notActive', sportGames: 'Active', adventureGames: 'notActive', rpgGames: 'notActive'});
        }
        else{
            this.setState({sportGames: 'notActive'});
        }
    }
    adventuresGamesClick = (type) => {
        if(type === 'notActive'){
            this.setState({actionGames: 'notActive', raceGames: 'notActive', sportGames: 'notActive', adventureGames: 'Active', rpgGames: 'notActive'});
        }
        else{
            this.setState({adventureGames: 'notActive'});
        }
    }

    rpgGamesClick = (type) => {
        if(type === 'notActive'){
            this.setState({actionGames: 'notActive', raceGames: 'notActive', sportGames: 'notActive', adventureGames: 'notActive', rpgGames: 'Active'});
        }
        else{
            this.setState({rpgGames: 'notActive'});
        }
    }

    renderGames = () => {
            return this.props.data.gamePS3.map( (game, i) => {
                return (
                     <SaleCard consoleType={"PS3"} name={game.name} price={game.price}/>
                )
            } )
        
    }
    renderActionGames = () => {
        return this.props.data.gamePS3.map( (game, i) => {
            if(game.genre === 'Akčná'){
                return (
                    <SaleCard consoleType={"PS3"} name={game.name} price={game.price}/>
                )
            }    
        } )
    }
    renderRaceGames = () => {
        return this.props.data.gamePS3.map( (game, i) => {
            if(game.genre === 'Závodná'){
                return (
                    <SaleCard consoleType={"Ps3"} name={game.name} price={game.price}/>
                )
            }
        } )
    }
    renderSportGames = () => {
        return this.props.data.gamePS3.map( (game, i) => {
            if(game.genre === 'Športová'){
                return (
                    <SaleCard consoleType={"PS3"} name={game.name} price={game.price}/>
                )
            }
        } )
    }
    renderAdventureGames = () => {
        return this.props.data.gamePS3.map( (game, i) => {
            if(game.genre === 'Adventúra'){
                return (
                    <SaleCard consoleType={"PS3"} name={game.name} price={game.price}/>
                )
            }
        } )
    }
    renderRpgGames = () => {
        return this.props.data.gamePS3.map( (game, i) => {
            if(game.genre === 'RPG'){
                return (
                    <SaleCard consoleType={"PS3"} name={game.name} price={game.price}/>
                )
            }
        } )
    }
    render(){
        if(this.props.data.loading){
            return<div>Loading...</div>
        }
        else{
        return([
            <div className="filter">
                <div onClick={()=>this.actionGamesClick(this.state.actionGames)} className={`filter-classes__${this.state.actionGames}`}>
                    <p>Akčné</p>
                </div>
                <div onClick={()=>this.raceGamesClick(this.state.raceGames)} className={`filter-classes__${this.state.raceGames}`}>
                    <p>Závodne</p>
                </div>
                <div onClick={()=>this.sportGamesClick(this.state.sportGames)} className={`filter-classes__${this.state.sportGames}`}>
                    <p>Športové</p>
                </div>
                <div onClick={()=>this.adventuresGamesClick(this.state.adventureGames)} className={`filter-classes__${this.state.adventureGames}`}>
                    <p>Adventúry</p>
                </div>
                <div onClick={()=>this.rpgGamesClick(this.state.rpgGames)} className={`filter-classes__${this.state.rpgGames}`}>
                    <p>RPG</p>
                </div>
            </div>,
            <div className="games">
                    {this.state.actionGames === 'notActive' &&
                    this.state.raceGames === 'notActive' &&
                    this.state.sportGames === 'notActive' &&
                    this.state.adventureGames === 'notActive' &&
                    this.state.rpgGames === 'notActive'?
                    this.renderGames()
                    :
                        this.state.actionGames === 'Active'?
                            this.renderActionGames()
                            :
                            this.state.raceGames === 'Active'?
                            this.renderRaceGames()
                            :
                            this.state.sportGames === 'Active'?
                            this.renderSportGames()
                            :
                            this.state.adventureGames === 'Active' ?
                            this.renderAdventureGames()
                            :
                            this.state.rpgGames === 'Active' ?
                            this.renderRpgGames()
                            :
                            <p>Chyba</p>
                }
                    
            </div>
        ]
        );}
    }
}




export default graphql(getData)(FilterPS3);