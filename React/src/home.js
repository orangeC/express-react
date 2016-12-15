import React,{Component, PropTypes} from 'react';
import axios from 'axios';
import map from 'lodash/fp/map';

import { Link} from 'react-router';


class Home extends React.Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:4000/users')//后台代码
      .then((response)=>{
        this.setState({
          users:response.data.users
        })
      })
  }
      render () {
        console.log(this.state.users);
        const userList = map((user) => {
          return (
            <div key={user._id}>
              <Link to={`user/${user._id}`}>{user.username}</Link>

            </div>
          )
        }, this.state.users);

        return(
          <div >
        { userList }
       </div>
        )
      }
    }
export default Home;
