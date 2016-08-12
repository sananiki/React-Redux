import React, { Component, PropTypes } from 'react';
import { Table } from 'antd';
export default class Todo extends Component {
    handleComplete= function (e) {
        var delIndex = this.props.index;  //通过KEY取不到，要做处理
        //console.log("删除"+delIndex);
          // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
        this.props.changeTodoState(delIndex);
        }
  render() {
    return (
      <p onClick={this.handleComplete.bind(this)} style={{
          textDecoration: this.props.isDone == 'true'? 'line-through' : 'none'
        }}>
        {this.props.text}
      </p>
    )
  }
}