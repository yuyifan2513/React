import { Component,createRef } from 'react'

export default class Parent extends Component {
    state = {
        money: 10000,
    }
    // 定义一个传给子组件的回调函数
    updateMoney(phonePrice) {
        const { money } = this.state
        // 进行价格的加减
        this.setState({
            money: money - phonePrice
        })
    }
    render() {
        const { money } = this.state
        return (
            <div>
                <p>我是父组件</p>
                <Child money = {money} updateMoney={this.updateMoney.bind(this)} />
                <Son money = {money} updateMoney={this.updateMoney.bind(this)} /> 
            </div>
        )
    }
}

// 函数式组件接收props属性
function Child ({  money,updateMoney }) {
    // props是所有props属性的集合对象
    // 定义一个绑定给按钮的函数，让其直接调用接收的父组件的函数
    const pay = () => {
        updateMoney(200)
    }
    return (
        <div style={{ color: 'blue'}}>
            <p>我是大儿子</p>
            <p>接收到父亲给我的钱： {money}</p>
            <button onClick={pay}>买电脑</button>
        </div>
    )
}

// 类组件接收props属性
class Son extends Component {
    inputRef = createRef()
    buyPhone() {
        // 接收父组件定义的回到函数
        const { updateMoney } = this.props
        const phonePrice = parseInt(this.inputRef.current.value)
        // 要给父组件传值  传给父组件手机价格phonePrice
        updateMoney(phonePrice)
    }
    render() {
        const { money } = this.props;
        return (
            <div style={{ color: 'brown'}}>
                <p>我是二儿子</p>
                <p>接收到父亲给我的钱： {money}</p>
                <label htmlFor="">手机价格</label>
                <input ref={this.inputRef} type="text"></input>
                <button onClick={this.buyPhone.bind(this)}>买手机</button>
            </div>
        )
    }
}