import React,{Component} from 'react';
import {graphql, Query, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header/Header';
import SVG from '../components/SVG/SVG';

import {Link} from 'react-router-dom';
import loginIcon from '../../src/img/svg/login.svg'

const returnUser = gql`
query returnUser($email: String, $password:String){
	user(email: $email, password: $password){
        name,
        lastname,
        email
  }
}
`;

const getUserData = gql`
query{
    user @client{
        userData
    }
    finder @client {
        finderData
    }
}
`;

const userDataMutation = gql`
  mutation($userData: String) {
    updateUserData(userData: $userData) @client
  }
`;

class LogIn extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            userLogged: false,
            userEmail: '',
            correct: true
        }
    }

    render(){
        console.log('login:',this.props)
        const { mutate, data: { loading, finder } , className} = this.props;
        return([
            <Header user={this.state.userEmail} />,
            <div className="container-logIn">

                <div className="container-logIn-box">
                    <div className="container-logIn-box__icon">
                        <SVG className={"container-logIn-box__icon__img"} alt={"login-icon"} src={loginIcon}></SVG>
                    </div>
                    <div className={"container-logIn-box__inputs"}>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="email">Zadaj email</label>
                            <input  id="email" type='email' placeholder='Zadajte email' onChange={(event)=>{this.setState({email: event.target.value})}} value={this.state.email} className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="password">Zadaj heslo</label>
                            <input id="password" type='password' placeholder='Zadajte heslo' onChange={(event)=>{this.setState({password: event.target.value})}} value={this.state.password} className="input"/>
                    </div>
                        </div>
                    <div>
                        <Link to={"registracia"}><p className="container-logIn__registration">Ak nemáte účet zaregistrujte sa &rArr;</p></Link>
                        <Link to={"obnovahesla"}><p className="container-logIn__forgottenPassword">Zabudli ste heslo?</p></Link>
                    </div>
                    
                    <button 
                    className="logIn-button"
                    onClick={()=>{
                        this.setState({userLogged: true});
                        }}>Prihlasit</button>
                    
                    {this.state.userLogged &&
                        <Query query={returnUser} variables={{email: this.state.email, password: this.state.password}}>
                            {
                                ({loading, error, data})=>{
                                        if(data.user){
                                            console.log('user:', data.user)
                                            this.setState({userEmail: data.user.email, userLogged: false, correct: true});

                                            mutate({
                                                variables: {
                                                    userData: this.state.userEmail
                                                    }
                                                })
                                        }
                                        else if(data === undefined){
                                            return null;
                                        }   
                                        else{
                                            return null;
                                        }

                                    return true
                                }
                            }
                        </Query> 
                    }
                </div>


            </div>
        ]

            
        );
    }
}

export default compose(
    graphql(getUserData),
    graphql(userDataMutation),
    //graphql(getFinderData)
)(LogIn);