// 首字母大写
// 继承React.Component
// 必须render函数实现 必须返回结构 可以返回null
import React from 'react';

// 函数式组件-一直在use，从未用this
const Teacher = () => {
    return (
        <div>
            撒女内
        </div>
    )
}

// 类组件-一定有this
class Student extends React.Component {
    render() {
        return (
            <div>
                <Teacher />
                <p>你kin你擦</p>
            </div>
        )
    }
}

export default Student