import React,{Component} from 'react';
import Header from '../components/Header/Header';
import SVG from '../components/SVG/SVG';
import registerIcon from '../../src/img/svg/register.svg'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Registration extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            city: '',
            adress: '',
            postalcode: '',
            success: false
        }
    }

    onInputsSubmit = (event) => {
        event.preventDefault();
        if(this.state.name !== '' && this.state.lastname !== '' && this.state.email !== '' && this.state.password !== '' && this.state.city !== '' && this.state.adress !== '' && this.state.postalcode !== ''){
            this.props.mutate({
                variables: {
                    name: this.state.name,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    password: this.state.password,
                    city: this.state.city,
                    adress: this.state.adress,
                    postalcode: this.state.postalcode
                }
             }).then(window.location.assign('/prihlasenie'));
        }
        if(this.state.success){
            window.location.assign('/prihlasenie')
        }
    }

    render(){
        console.log(this.state)
        return(
            
            <div className="container-registration">
                 <Header />
                <div className="container-registration-box">
                    <div className="container-logIn-box__icon">
                        <SVG className={"container-logIn-box__icon__img"} alt={"login-icon"} src={registerIcon}></SVG>
                    </div>
                    <div className="container-registration-box__inputs">
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="name">Zadajte krstné meno</label>
                            <input  id="name" type='text' placeholder='Zadajte krstné meno' onChange={(event)=>{this.setState({name: event.target.value})}} className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="lastname">Zadajte priezvisko</label>
                            <input  id="lastname" type='text' placeholder='Zadajte priezvisko' onChange={(event)=>{this.setState({lastname: event.target.value})}} className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="email">Zadajte email</label>
                            <input  id="email" type='email' placeholder='Zadajte email' onChange={(event)=>{this.setState({email: event.target.value})}} className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="pass">Zadajte heslo</label>
                            <input  id="pass" type='password' placeholder='Zadajte heslo' onChange={(event)=>{this.setState({password: event.target.value})}}  className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="city">Zadajte mesto</label>
                            <input  id="city" type='text' placeholder='Zadajte mesto' onChange={(event)=>{this.setState({city: event.target.value})}}  className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="adr">Zadajte adresu</label>
                            <input  id="adr" type='text' placeholder='Zadajte adresu' onChange={(event)=>{this.setState({adress: event.target.value})}}  className="input"/>
                        </div>
                        <div className={"container-logIn__labelsinputs"}>
                            <label for="psc">Zadajte PSČ</label>
                            <input  id="psc" type='text' placeholder='Zadajte PSČ' onChange={(event)=>{this.setState({postalcode: event.target.value})}}  className="input"/>
                        </div>

                    </div>
                    {(this.state.name !== '' && this.state.lastname !== '' && this.state.email !== '' && this.state.password !== '' && this.state.city !== '' && this.state.adress !== '' && this.state.postalcode !=='')?
                        <button 
                        className="logIn-button" onClick={(event)=>this.onInputsSubmit(event)}>Potvrdit</button>
                        :
                        <p className="container-registration__fillFields">Vypnte všetky udaje</p>
                    }
                </div>
            </div>
        );
    }
}

export const mutation = gql`
mutation AddUser($name: String, $lastname: String, $email: String, $password:String, $city:String, $adress:String, $postalcode:String){
    addUser(name: $name, lastname: $lastname, email:$email, password:$password, city:$city, adress:$adress, postalcode:$postalcode){
      name,
      lastname,
      email
}
}
`;


// export default graphql(mutation)(
//     graphql(query)(Registration)
// );

export default graphql(mutation)(Registration);