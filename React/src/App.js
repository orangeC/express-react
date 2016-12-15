import React,{Component, PropTypes} from 'react'
import axios from 'axios';
import map from 'lodash/fp/map';
export default class App extends Component {

  render(){

    return(
      <div>
        欢迎登录
        {this.props.children}
        
      </div>
    )
  }
}
