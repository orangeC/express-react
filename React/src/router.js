import React,{Component, PropTypes} from 'react';
import App from './App';
import Home from './home';
import User from './User';
import Login from './Login';
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';


    class Routers extends React.Component {
      render () {
        return(
          <div>
            <Provider store={store}>
              <Router history={hashHistory}>
                <Route path="/" component={App} >
                <IndexRoute component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="user/:id" component={User}/>
                </Route>
             </Router>
           </Provider>
       </div>
        )
      }
    }

    export default Routers;
