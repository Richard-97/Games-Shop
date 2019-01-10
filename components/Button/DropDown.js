import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import SVG from '../SVG/SVG';

import droparrow from '../../img/svg/drop-down-arrow.svg';

class DropDown extends Component{

    render(){
        const {text, linkwhere, first, second, third, fourt} = this.props;
        return(
            <div className="dropdown">
                <p className="dropdown-text">{text}</p>
                <SVG className={"dropdown-content__icon"}alt={"arrow"} src={droparrow} />
                <div class="dropdown-content">
                    <Link className={'link'} to={`${text}_${first}`}><p className="dropdown-content__link">{first}</p></Link>
                    <Link className={'link'} to={`${text}_${second}`}><p className="dropdown-content__link">{second}</p></Link>
                    <Link className={'link'} to={`${text}_${third}`}><p className="dropdown-content__link">{third}</p></Link>
                </div>
            </div>
        );
    }
}

export default DropDown;