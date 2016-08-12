import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { Card } from 'antd';
export default class TodoList extends Component {
/*
 *  声明个方法进行处理 
 * 
 */

  render() {
    return (
      <Card style={{ width: 300 }}>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo} key={index} index={index} {...this.props}/>  //这边的 {...this.props}很关键，把this.props都取了过来
        )}
      </Card>
    )
  }
}