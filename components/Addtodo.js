import React, { Component, PropTypes } from 'react';
import { Input, Button ,message  } from 'antd';
export default class AddTodo extends Component {


  handleClick = (e) => {
    //console.log(this.refs)
    var comments = this.props.todo;
    //console.log("现在的数据："+comments)
    const node = this.refs.sa.refs.input
    const db= node.value.trim();
    const text = {
                text: db,
                isDone: 'false'
            };
    //console.log(text)
    message.info('您增加的是: ' + db);
    //this.setState({ node:text });
    if (text !== '') {
         // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
          comments.push(text);
          this.props.onAdd(comments);
        }
    //console.log(texts)
    node.value = ''
  }


  render() {
    return (
      <div className="example-input">
        <Input placeholder="需要添加的内容" ref="sa"   />
        <Button type="primary" onClick={this.handleClick}>增加</Button>

      </div>
    )
  }
}