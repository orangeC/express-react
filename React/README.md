# React Transform Boilerplate

### 前台书写　axios 请求

API　前台 测试


```
curl -X GET http://localhost:3000/users
```

```js
componentWillMount(){
  axios.get('http://localhost:4000/users')//后台服务连接
        .then((response)=>{this.setState({username:response.data.users[0].username})})
}
```
获取数据库所有的用户名

```js
componentWillMount(){
  axios.get('http://localhost:4000/users')//后台代码
        .then((response)=>{this.setState({username:response.data.users.map((item,index) =>
          <div key={index}>{item.username}</div>)})})
}
```

### 使用　map 展开数组

我们可以使用　ES6 自带的　map 来完成用户名的展示。也可以加载　lodash 的　map 方法。map()方法

小贴士：什么是　lodash ? lodash 是一个　JS 的库，它里面提供了很多　JS 的基础方法，方便使用　JS 语言。 使用　lodash 是写　JS 代码的标配。 小贴士结束

安装　lodash

```
npm i --save lodash
```
然后，到　index.js 中导入一下

```js
import map from 'lodash/fp/map';
```
render 函数做如下调整：

```js
render(){
  const userList = map((user) => {
    return (
      <div key={user._id}>
        {user.username}
      </div>
    )
  }, this.state.users);

  return(
    <div>
      { userList }
    </div>
  )
}
```
这样，页面中就可以显示出所有用户的用户名的列表了。

### 通过点击username 获取个人信息页面
