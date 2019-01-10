import React,{Component} from 'react';
import Header from '../components/Header/Header';
import SVG from '../components/SVG/SVG';

import { gql } from "apollo-boost";
import { graphql, compose, Query } from "react-apollo";

import SaleCard from '../components/SaleCard/SaleCard';

import game4 from '../img/games/fifa19.jpg';
import titlephoto from '../img/main/mainimg.svg';



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
            <React.Fragment>
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
                <div className="title">
                    <div className="title-textarea">
                        <p className="title-text1">best games</p>
                        <p className="title-text2">miesto pre vaše hry</p>
                    </div>
                </div>
                <div className="container-intro">
                    <div className="slider">
                        <div className="slider__img">
                            
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
            </React.Fragment>
        );
    }
}



export default Main;
