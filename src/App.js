import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Registration from './containers/Registration';
import Main from './containers/Main';
import AddGame from './containers/AddGame';
import LogIn from './containers/LogIn';
import GamesPS4 from './containers/GamesPS4';
import GamesXBOX from './containers/GamesXBOX';
import GamesPS3 from './containers/GamesPS3';
import OrderSummary from './containers/OrderSummary';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div >
          <Route  exact path='/' component={Main} />
          <Route path='/registracia' component={Registration} />
          <Route path='/novahra' component={AddGame} />
          <Route path='/prihlasenie' component={LogIn} />
          <Route path='/Hry_PS4' component={GamesPS4} />
          <Route path= '/Hry_XBOX' component={GamesXBOX} />
          <Route path= '/Hry_PS3' component={GamesPS3} />
          <Route path= '/kosik' component={OrderSummary} />
      </div>
    );
  }
}
export default withRouter(App);
