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
    price @client {
        priceData,
        gameName
    }
}
`;

class OrderSummary extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        console.log('kosik:',this.props)
        return(
            
            <div className="container-login">
                <Header />
                platba
            </div>
        );
    }
}


export default graphql(getData)(OrderSummary);