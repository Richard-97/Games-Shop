import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const userDataMutation = gql`
  mutation($userData: String) {
    updateUserData(userData: $userData) @client
  }
`;

class LogOutButton extends Component{
    onLogOut = (event) => {
        event.preventDefault();
        
        this.props.mutate({
            variables: { userData: '' },
            //refetchQueries: [{ query: query }] //spustenie query aby sa skladba ukazala v liste
        })
    }

    render(){

        return(
            <div className="button">
                   <button onClick={this.onLogOut.bind(this)} className="button__logout">Odhlasit</button>
            </div>
        );
    }
}

export default graphql(userDataMutation)(LogOutButton);