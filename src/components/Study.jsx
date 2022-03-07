import { Component} from 'react'

export default class Study extends Component {
    // 定义状态
    state = {
        //  存放的就是状态
        course: [
            "html",
            "css",
            "javascript",
            "vue",
            "react"
        ],
        time: 10,
        money: 10000
    }
    handleClick (event) {
        // 事件处理参数对象
        // 阻止事件冒泡-阻止事件向上传播
        // 阻止默认事件
        event.preventDefault();

    }
    handleMouse () {
        console.log(123);
    }
    render() {
        // this.state
        // this指的是当前实例
        const { course, time, money } = this.state
        return (
            <div>
                {/* 循环学到的课程 */}
                <p>学到的课程</p>
                <ul>
                    {
                        course.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <p>每天学习的时间：{time}小时</p>
                <p>薪资：{money}$</p>
                <a href="http://www.itcast.cn" onClick={this.handleClick}>更新信息</a>
                <div 
                 style={{ width: '300px', height: '300px',backgroundColor: 'red'}} 
                 //onMouseEnter={this.handleMouse}
                 onMouseEnter={() => this.handleMouse()}
                //  bind方案
                ></div>
            </div>
        )
    }
}

class Learn extends Component {
    state = {}
    render() {
        return (
            null
        )
    }
}