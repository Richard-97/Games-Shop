import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SimpleButton extends Component{

    render(){
        const {text, linkwhere} = this.props;
        return(
            <div className="button">
                <Link className={'link'} to={linkwhere}>
                   <p className="button__perform">{text}</p>
                </Link>
            </div>
        );
    }
}

export default SimpleButton;