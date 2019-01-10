import React, {Component, Fragment} from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom'

import getCurrentGame from '../queries/getCurrentGame';
import allGames from '../queries/allGames';

const query = gql`
{
    users{
        name,
        lastname,
        email
    }
    networkStatus @client{
        isConnected
    }
}
`;


class AddGame extends Component{
    constructor(){
        super();
        this.state ={
            data: ''
        }
    }
    render(){
        return(
            <Fragment>
                <input placeholder="zadaj nazov"    />
                <input placeholder="zadaj zaner"/>
                <Link to={"/"}><button>Home</button></Link>
            </Fragment>
        );
    }
}

export default AddGame;