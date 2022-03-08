import { Component} from 'react'

export default class AddCount extends Component {
    state = {
        count: 0,
        name: "zhangsan",
        arr: ["电脑","手机","平板"]
    }
    addCount () {
        // this取到当前的实例
        this.setState({
            count: this.state.count + 1
        })
    }
    addData () {
        const {arr} = this.state // 取出原来的数据
        this.setState({
            arr: ["耳机",...arr]
        })
    }
    render() {
        const { count,name,arr } = this.state
        return (
            <div>
                <p>姓名: {name}</p>
                <p>当前的数字: {count}</p>
                <button onClick={() => this.addCount()}>+1</button>
                <button onClick={() => this.addData()}>加数据</button>
                <div>data
                    <ul>
                        {
                            arr.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}