import React,{Component} from 'react';
import Header from '../components/Header/Header';

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
        const {data} = this.props;
        return(
            
            <div className="container-login">
                <Header />
                {
                    this.props.data.loading ?
                        <div>Loading...</div>
                        :
                        <table className="pay-table">
                            <tr>
                                <th>Názov</th>
                                <th>Cena</th>
                                <th>Počet</th>
                            </tr>
                            <tr>
                                <th>{data.price.gameName}</th>
                                <th>{data.price.priceData}</th>
                                <th>1</th>
                            </tr>
                        </table>
                }
            </div>
        );
    }
}


export default graphql(getData)(OrderSummary);