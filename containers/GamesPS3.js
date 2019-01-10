import React,{Component} from 'react';
import Header from '../components/Header/Header';
import FilterPS3 from '../components/Filter/FilterPS3';

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

class GamesPS3 extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return(
            
            <div className="container-login">
                <Header />
                <FilterPS3 />
            </div>
        );
    }
}


export default graphql(getData)(GamesPS3);