import { Component } from 'react'
import './index.css'
import CommentInput from './CommentInput'
import CommentHead from './CommentHead'
import CommentList from './CommentList'

export default class App extends Component {
    render(){
        return (
            <div className="comments">
                {/* 输入框组件 */}
                <CommentInput />
                {/* 标题排序组件 */}
                <CommentHead />
                {/* 列表组件 */}
                <CommentList />
            </div>
        )
    }
}