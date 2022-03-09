import { Component } from 'react'
import './index.css'
import CommentInput from './CommentInput'
import CommentHead from './CommentHead'
import CommentList from './CommentList'

export default class App extends Component {
    state = {
        active: "default", // 排序是默认排序
        // 用户信息
        user: {
          name: '清风徐来',
          avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
          vip: true,
        },
        // 评论列表
        comments: [
          {
            id: 100,
            name: '__RichMan',
            avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
            content:
              '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
            time: new Date('2021/10/12 10:10:23'),
            vip: true,
            collect: false,
          },
          {
            id: 101,
            name: '糖蜜甜筒颖',
            avatar:
              'https://image.9xsecndns.cn/image/uicon/712b2bbec5b58d6066aff202c9402abc3370674052733b.jpg',
            content:
              '突围神仙阵容 人民的名义第三部来了 靳东陈晓闫妮秦岚等众多优秀演员实力派 守护人民的财产 再现国家企业发展历程',
            time: new Date('2021/09/23 15:12:44'),
            vip: false,
            collect: true,
          },
          {
            id: 102,
            name: '清风徐来',
            avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
            content:
              '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
            time: new Date('2021/07/01 00:30:51'),
            vip: true,
            collect: false,
          },
        ],
    }
    updateActive(value) {
        this.setState({ 
            active: value
        })
    }
    addComment(content) {
        const { user,comments } = this.state
        const item = {
            id: ~~Math.random() * 1000, // 双波浪线 等同于Math.florr() 四舍五入取整 ~~undefined => 0
            content,
            ...user,
            collect: false,
            time: new Date(),
        }
        this.setState({
            comments: [...comments,item]
        })
    }
    deleteComment(id) {
        const comments = this.state.comments.filter((item) => item.id !== id)
        this.setState ({
            comments: comments
        })
    }
    collectOrCancel(id) {
        const { comments } = this.state
        // comments.map((item) =>{
        //     if(item.id === id){
        //         return { ...item,collect: !item.collect}
        //     }
        //     return item
        // })
        const item = comments.find((item) => item.id === id)
        item.collect = !item.collect
        this.setState({
            comments: comments,
        })
    }
    render(){
        const { comments,user,active } = this.state
        return (
            <div className="comments">
                {/* 输入框组件 */}
                <CommentInput addComment={this.addComment.bind(this)} />
                {/* 标题排序组件 */}
                <CommentHead
                    commentsLength={comments.length}
                    active={active}
                    updateActive={this.updateActive.bind(this)}
                />
                {/* 列表组件 */}
                <CommentList
                 comments={comments}
                 user={user} active={active}
                 deleteComment={this.deleteComment.bind(this)}
                 collectOrCancel={this.collectOrCancel.bind(this)}
                />
            </div>
        )
    }
}