import { Component } from 'react'

export default class CommentInput extends Component {
    state = {
        content: ""
    }
    render() {
        const { content } = this.state
        return (
            <>
              <h3 className="comm-head">评论</h3>
              <div className="comm-input">
                    <textarea
                     onChange={e =>
                        // 使用逻辑表达式达成限制输入字数的效果
                        // 只有输入字数小于100且输入内容改变时才会触发onChange事件刷新输入的内容
                        e.target.value.trim().length <= 100 &&
                        this.setState({ content: e.target.value})
                     }
                     value={content}
                     placeholder="爱发评论的人，运气都很棒"
                    >
                    </textarea>
                    <div className="foot">
                        <div className="word">{content.length}/100</div>
                        <div
                         className="btn"
                         onClick={() => {
                             //调用父组件的方法传受控组件的content
                            this.props.addComment(content)
                            // 清空输入框
                            this.setState({
                                content: ""
                            })
                        }}
                        >
                            发表评论
                        </div>
                    </div>
              </div>
            </>
        )
    }
}
