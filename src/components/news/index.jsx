import { Component } from 'react'
import './index.css'

export default class NewList extends Component {
    state = {
        news: [
            {
                id: 1,
                title: '最高检：追诉拐卖人口犯罪将继续从严',
                likeCount: 123,
                publish: '央视新闻客户端'
            },
            {
                id: 2,
                title: '王毅向日方提出3点忠告:不要为他人火中取栗也不要以邻为壑',
                likeCount: 456,
                publish: '字节'
            },
            {
                id: 3,
                title: '孙春兰：各级党委和政府要严厉打击拐卖妇女等违法犯罪行为',
                likeCount: 789,
                publish: '百度'
            },
            {
                id: 4,
                title: '“70后”的他赴省会城市履新，成西安市最年轻市委常委',
                likeCount: 891,
                publish: '腾讯'
            },
        ]
    }
    updateItem(id) {
        // 更新对应id的点赞数
        // const news = this.state.news.map(item => {
        //     if(item.id === id) {
        //         return {...item, likeCount: item.likeCount + 1 }
        //     }
        //     return item
        // })
        const {news} = this.state
        news.find(item => item.id ===id).likeCount++ // 直接改了state里的数据，但没有用setState更新
        this.setState({
            news: news
        })
    }
    render() {
        const { news } = this.state
        return (
            <div className="parent">
                <h1>今日要闻</h1>
                {
                    news.map(item => (
                        <NewItem key = {item.id} item = {item} updateItem={this.updateItem.bind(this)} ></NewItem>
                    ))
                }
            </div>
        )
    }
}

function NewItem ({ item,updateItem }) {
    const addLike = () => {
        // props.id => 调用父组件的方法 -> 对应的选项点赞数+1
        updateItem(item.id)
    }
    return (
        <>
            <div className="child">
                <h3>{item.title}</h3>
                <div className="detail">
                    <span>{item.publish}</span>
                    <span>{item.likeCount}点赞</span>
                    <span onClick={addLike}>点赞+1</span>
                </div>
            </div>
        </>
    )
}