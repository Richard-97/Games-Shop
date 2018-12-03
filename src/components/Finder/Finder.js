import React, {Component} from "react";
import { gql } from "apollo-boost";
import { graphql, compose, Query } from "react-apollo";

const getFinderData = gql`
  query {
    finder @client {
        finderData
    }
  }
`;

const finderDataMutation = gql`
  mutation($finderData: String) {
    updateFinderData(finderData: $finderData) @client
  }
`;



class Finder extends Component{

    render(){
        const { mutate, data: { loading, finder } , className} = this.props;

        return(
            <input
                className={"Main-Finder"}
                placeholder="Hľadať"
                onChange={(event) =>{
                    mutate({
                    variables: {
                        finderData: event.target.value
                        }
                    })
                }}
                />
        );
    }
}

export default compose(
    graphql(getFinderData),
    graphql(finderDataMutation)
  )(Finder);
  