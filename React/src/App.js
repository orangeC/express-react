import React,{Component, PropTypes} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import axios from 'axios';
import map from 'lodash/fp/map';
import Radium, { StyleRoot } from 'radium';
import Header from './Header';

class App extends Component {
	getChildContext() {
	    return { muiTheme: getMuiTheme() };
	  }

  render(){

    return(
    	<StyleRoot>
		      <div>
		        <Header />
		        欢迎登录
		        {this.props.children}
		        
		      </div>
      	</StyleRoot>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default Radium(App);
