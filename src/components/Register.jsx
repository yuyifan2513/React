import { Component,createRef } from 'react'

export default class RegisterComponent extends Component {
    myRef = createRef() //声明一个对象
    state = {
        loading: true
    }
    getValue() {
        console.log(this.myRef.current?.value); //?表示可选链操作符,若前面为空或undefined或bull,不会继续向后取值
    }
    render() {
        const { loading } = this.state;
        return (
            <>
            <div>
                {
                    loading ? (<div>
                         正在加载
                    </div>) : (<input ref={this.myRef} type="text" />)
                }
                <button onClick={() => this.getValue()}>获取input的值</button>
                <button onClick={() => this.setState({ loading : !loading})}>显示/隐藏</button>
            </div>
            </>
        )
    }
}