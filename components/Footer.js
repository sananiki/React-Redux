import React, { Component, PropTypes } from 'react'
import { Tag } from 'antd';
export default class Footer extends Component {
 
  isCom=function (){
    //console.log("过滤已完成")
    let Com='Com'
    this.props.isCheck(Com)
  }

  isAll=()=>{
    //console.log("过滤全部")
    let All='All'
    this.props.isCheck(All)
  }

  isNotCom=()=>{
    //console.log("过滤未完成")
    let NotCom='NotCom'
    this.props.isCheck(NotCom)
  }

  render() {
    return (
    <div className="tag">
      <Tag color="blue" onClick={this.isAll}>全部</Tag>
      <Tag color="green" onClick={this.isNotCom}>未完成</Tag>
      <Tag color="red" onClick={this.isCom.bind(this)}>已完成</Tag>
    </div>
    )
  }
}
