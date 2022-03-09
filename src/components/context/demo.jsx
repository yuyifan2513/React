import { Component,createContext } from 'react'

const MyContext = createContext()

export default class Father extends Component{
    state = {
        money: 10000
    }
    updateMoney(value) {
        this.setState({ 
            money: value
        })
    }
    render() {
        const { money } = this.state
        return (
            <div>
                <MyContext.Provider value={{ money: money , updateMoney: this.updateMoney.bind(this)}}>
                    <p>我是根组件: {money}</p>
                    <hr />
                    <Son />
                </MyContext.Provider>
            </div>
        )
    }
}

class Son extends Component{
    render() {
        return (
            <div>
                <p>我是儿子</p>
                <hr />
                <GrandSon />
            </div>
        )
    }
}

class GrandSon extends Component{
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (value) => (
                            <p>
                                我是孙子: {value.money}
                                <button onClick={() => value.updateMoney(5000)}>修改金钱</button> 
                            </p>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}