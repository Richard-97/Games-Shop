import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import game1 from '../../img/games/diablo3.png';
import game2 from '../../img/games/cod-bo4.jpg';
import game3 from '../../img/games/justcause4.jpg';
import game4 from '../../img/games/fifa19.jpg';
import game5 from '../../img/games/origins.jpg';
import game6 from '../../img/games/needforspeed.png';
import game7 from '../../img/games/nhl19.jpg';
import game8 from '../../img/games/horizonzerodawn.jpg';
import game9 from '../../img/games/nba19.jpg';

const priceMutation = gql`
  mutation($priceData: Number, $gameName:String) {
    updatePriceData(priceData: $priceData, gameName: $gameName) @client
  }
`;

class SaleCard extends Component{
    onBuyGameClick = (event, price, game) => {
        event.preventDefault();
        this.props.mutate({
            variables: { priceData: price, gameName: game },
            //refetchQueries: [{ query: query }] //spustenie query aby sa skladba ukazala v liste
        })
    }

    render(){
        const {consoleType, name, price} = this.props;
        if(name === 'Just Cause 4'){
            var src = game3;
        }
        else if(name === 'FIFA19'){
            var src = game4;
        }
        else if(name === 'Assassins Creed Origins'){
            var src = game5;
        }
        else if(name === 'Need For Speed'){
            var src = game6;
        }
        else if(name === 'NHL19'){
            var src = game7;
        }
        else if(name === 'Horizon Zero Dawn'){
            var src = game8;
        }
        else if(name === 'Call of Duty Black Ops 4'){
            var src = game2;
        }
        else if(name === 'Diablo 3'){
            var src = game1;
        }
        else if(name === 'NBA 2k19'){
            var src = game9;
        }
        return(
            <div className="salecard">
                <div className="salecard-console">
                    <p className={`salecard-console__${consoleType}`}>{consoleType}</p>
                </div>
                <div className="salecard-imgplace">
                    <img className="salecard-imgplace__img" alt={"sale_pic"} src={src} />
                </div>
                <p className={`salecard-gamename`}>{name}</p>
                <p className={`salecard-price`}>{`${price}€`}</p>
                <div className="salecard-button">
                    <div onClick={(event)=>this.onBuyGameClick(event, price, name)} className="salecard-button__btn">
                        {/* <Link className="link" to={`${consoleType.replace(/\s/g, '')}_${name.replace(/\s/g, '')}`}><p className="salecard-button__btn-text">Kúpiť</p></Link> */}
                        <p className="salecard-button__btn-text">Kúpiť</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default graphql(priceMutation)(SaleCard);