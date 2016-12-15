import React,{Component, PropTypes} from 'react';
import axios from 'axios';
class User extends React.Component {
  constructor(){
    super();
    this.state={
      user:{}
    }
  }
  componentWillMount(){
          axios.get(`http://localhost:4000/users/${this.props.params._id}`)//后台代码
          .then((response) => {
            // console.log(response);
            this.setState({users: response.data.user});
          })
  }
      render () {
        console.log(this.props.username);
        return(
          <div>
            个人信息：
            {this.state.user.username}<br/>
            {this.state.user.email}<br/>
            {this.state.user.age}

          </div>
        )
      }
    }
export default User;
