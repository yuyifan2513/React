import { Component } from 'react'

export default class Parent extends Component {
    state = {
        money: 10000,
    }
    render() {
        const { money } = this.state
        return (
            <div>
                <p>我是父组件</p>
                <Child money = {money} />
                <Son money = {money} />
            </div>
        )
    }
}

// 函数式组件接收props属性
function Child ({  money }) {
    // props是所有props属性的集合对象
    return (
        <div style={{ color: 'blue'}}>
            <p>我是大儿子</p>
            <p>接收到父亲给我的钱： {money}</p>
        </div>
    )
}

// 类组件接收props属性
class Son extends Component {
    render() {
        const { money } = this.props;
        return (
            <div style={{ color: 'brown'}}>
                <p>我是二儿子</p>
                <p>接收到父亲给我的钱： {money}</p>
            </div>
        )
    }
}