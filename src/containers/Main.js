import React,{Component} from 'react';
import Header from '../components/Header/Header';
import SVG from '../components/SVG/SVG';

import { gql } from "apollo-boost";
import { graphql, compose, Query } from "react-apollo";

import ps_console from '../img/svg/ps.svg';
import xbox_console from '../img/svg/xbox.svg'
import ps_controller from '../img/svg/ps_ovl.svg'
import xbox_controller from '../img/svg/xbox_ovl.svg'
import SaleCard from '../components/SaleCard/SaleCard';

import game4 from '../img/games/fifa19.jpg'



const query = gql`
{   
    finder @client{
        finderData
    }
    user @client{
        userData
    }
    price @client{
        priceData
    }
}
`;

class Main extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="container">
                <Query query={query}>
                    {
                        ({loading, error, data})=>{
                            if(loading)return <h4>Loading....</h4>
                            console.log('Finder:',data.finder.finderData)

                            return true
                        }
                    }
                </Query>

                    <Header user={''}/>
                

                <div className="container-intro">
                    <div className="slider">
                        <div className="slider__img">
                            
                        </div>
                    </div>
                    <div className="container-intro-text">
                        <p className="container-intro-text__primary">BEST GAMES</p>
                        <p className="container-intro-text__secondary">MIESTO PRE VAŠE HRY</p>
                        <div className="container-intro__icons">   
                            <SVG className={"container-intro__icon"} alt={"icon"} src={ps_console} />
                            <SVG className={"container-intro__icon"} alt={"icon"} src={ps_controller} />
                            <SVG className={"container-intro__icon"} alt={"icon"} src={xbox_console} />
                            <SVG className={"container-intro__icon"} alt={"icon"} src={xbox_controller} />
                        </div>
                    </div>
                </div>

                <div className="container-bestsellers">
                    <div className="container-bestsellers-intro">
                        <p className="container-bestsellers-intro__text">Najpredávanejšie produkty</p>
                        <p className="container-bestsellers-intro-secondary">
                            Produkty, ktoré sa najlepšie predávajú medzi zaregistrovanými použivateľmi.
                        </p>
                        <p className="container-bestsellers-intro-tertiary">
                            Pozrieť ostatné &#8680;
                        </p>

                    </div>

                    <div className="container-bestsellers__gamescards">
                        <SaleCard consoleType={"PS4"} src={game4} name={"FIFA19"} price={"49.99"}/>
                    </div>  
                    


                </div>
            </div>
        );
    }
}



export default Main;
