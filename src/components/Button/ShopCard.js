import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import SVG from '../SVG/SVG';

import shopicon from '../../img/svg/shopping-cart.svg'

class ShopCard extends Component{

    render(){
        const { final_price, game } = this.props;
        return(

            <div className="dropdown">
                <p className="dropdown-text"><SVG className={"dropdown-content__icon"}alt={"shopicon"} src={shopicon}/>Kosik</p>
                <div class="dropdown-content">
                    <p>Vybrana hra: {game}</p>
                    <p>Celkova suma košíka: {final_price}</p>
                    <Link className="link" to={'kosik'}><p className="dropdown-content__link-pay"></p>Zaplatiť</Link>
                </div>
            </div>
        );
    }
}

export default ShopCard;