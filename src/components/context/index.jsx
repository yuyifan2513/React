import { Component,createContext } from 'react'

const HisContext = createContext(0) // 创建上下文对象 默认值为0 defaultValue
                                    // 默认值只会在没找到HisContext.Provider时才会生效

// 只要是多层级组件 就可以考虑使用context
export default class Parent extends Component {
    state = {
        value: 123,
    }
    render() {
        const { value } = this.state
        return (
            <>
                <HisContext.Provider value={value}>
                    {/* 划定范围：意思是在HisContext.Provider内所有的内容
                    都可以接收HisContext.Provider提供的数据 0 */}
                    <div>
                        我是根级组件
                    </div>
                    <Child />
                    <button onClick={() => this.setState({ value: value + 1 })}>改变value值</button>
                </HisContext.Provider>
            </>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <>
                <div>
                    我是第二层
                </div>
                <GrandChild />
            </>
        )
    }
}

class GrandChild extends Component {
    render() {
        return (
            <>
                <HisContext.Consumer>
                    {
                        (value) => <div>
                            我是第三层{value}
                        </div> // 渲染
                    }
                </HisContext.Consumer>
                <GrandGrandChild />
            </>
        )
    }
}

class GrandGrandChild extends Component {
    render() {
        return (
            <>
                <HisContext.Consumer>
                    {
                        (value) => <div>
                            我是第四层{value}
                        </div>
                    }
                </HisContext.Consumer>
            </>
        )
    }
}