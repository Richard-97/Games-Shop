import React,{Component} from 'react';
import Header from '../components/Header/Header';
import FilterXBOX from '../components/Filter/FilterXBOX';

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

class GamesXBOX extends Component{
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
                <FilterXBOX />
            </div>
        );
    }
}


export default graphql(getData)(GamesXBOX);