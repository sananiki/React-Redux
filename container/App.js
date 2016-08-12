import React, { Component, PropTypes } from 'react'
import AddTodo from '../components/Addtodo'
import TodoList from '../components/Todolist'
import Footer from '../components/Footer'
//var datas = [
//{text: "This is one comment",atuh:"sananiki"},
//{text: "This is *another* comment",atuh:"gods"}
//];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      node: [],
      searchText:''
    };
  }
  handleChange = (e) => {
    //console.log(this.props)
    this.setState({
      node: e
    })
  }

  changeTodoState(index) {
    console.log("开始运行编辑:" + index + "现在数组是：" + this.state.node)
    //this.state.node.splice(index,1)  //splice删除下标index,1位 (删除功能)
    this.state.node[index].isDone = 'true';  //文字中间加横线功能
    //let c=this.state.node
    this.setState({
      node: this.state.node
    })
  }



  isCheck(e) {
    //console.log("过滤")
    switch (e) {
      case 'Com':
        this.setState({
          searchText:'true'
        })
        break;
      case 'All':
        this.setState({
          searchText:''
        })
        break;
      case 'NotCom':
        this.setState({
          searchText:'false'
        })
        break;
      default:
         this.setState({
          searchText:''
        })
        break;
    }
  }


render() {
  let condition = this.state.searchText;
  let state = this.state.node;
  if(condition==''){
    var todoItem = state;
  }else{
    function check(item){
      return item.isDone == condition;
    }
    var todoItem = state.filter(check)  //用箭头函数好像有问题？用函数就没问题
  }
  return (
    <div>
      <AddTodo onAdd={this.handleChange} todo={this.state.node}/>
      <TodoList
        todos={todoItem} changeTodoState={this.changeTodoState.bind(this) }/>
      <Footer isCheck={this.isCheck.bind(this) } />
    </div>
  )
}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；


