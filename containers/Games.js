import React, {Component,} from 'react';
import SVG from '../components/SVG/SVG';
import xbox from '../img/svg/xbox.svg';
import ps from '../img/svg/ps.svg';
import xboxImg from '../img/xbox/xbox.jpg'
import ps4Img from '../img/ps4/ps4.png';

import Header from '../components/Header/Header';
import SimpleButton from '../components/Button/SimpleButton';

class Games extends Component{
    
    render(){
        return(
            <div className="games">
                <Header/>
                <div className="card">
                    <div className="card-side card-side-front">
                        <SVG className={"card-xbox"} alt={"xboxicon"} src={xbox} />
                        <p style={{fontSize:'3.5rem', textTransform:'uppercase'}}>xbox</p>
                    </div>
                    <div className="card-side card-side-back">
                        <SVG className={"card-side-back__img"} alt={"xboximg"} src={xboxImg} />
                        <SimpleButton text={'Otvor'} linkwhere={'/Hry_XBOX'} className={'card-button'}/>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-side card-side-front">
                        <SVG className={"card-ps"} alt={"psicon"} src={ps} />
                        <p style={{fontSize:'3.5rem', textTransform:'uppercase'}}>ps4</p>
                    </div>
                    <div className="card-side card-side-back">
                        <SVG className={"card-side-back__img"} alt={"xboximg"} src={ps4Img} />
                        <SimpleButton text={'Otvor'} linkwhere={'/Hry_PS4'} className={'card-button'}/>
                    </div>
                </div>
            </div>      
        );
    }
}

export default Games;