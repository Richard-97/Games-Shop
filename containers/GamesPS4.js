import React,{Component} from 'react';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


const getData = gql`
query{
    user @client{
        userData
    }
    finder @client {
        finderData
    }
    gamePS4{
        name,
        genre,
        PS4,
        XBOX,
        PS3
      }
      gamePS3{
        name,
        genre,
        PS4,
        XBOX,
        PS3
      }
}
`;

class GamesPS4 extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return(
            
            <div className="container-PS4">
                <Header />
                <Filter gameConsole={'PS4'}/>
            </div>
        );
    }
}


export default graphql(getData)(GamesPS4);