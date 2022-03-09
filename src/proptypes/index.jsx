import PropTypes from "prop-types";

const List = (props) => {
    const { colors } = props;
    return (
        <div>
            <ul>
                {
                    colors.map((item,index) => (
                        <li key={index}>
                            item
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// 对props属性进行校验
List.propTypes = {
    colors: PropTypes.array
}

export default function Parent() {
    return (
        <>
            <List colors={[]} />
            <Demo requiredFunc={() => {}} optionalObjectWithShape={{ color: '123'}} />
        </>
    )
}

const Demo = (props) => {
    return (
        <div>
            Demo组件
        </div>
    )
}

Demo.propTypes = {
    // 常见类型
    optionalFunc: PropTypes.func,
    // 常见类型+必填
    requiredFunc: PropTypes.func.isRequired,
    // 特定结构的对象
    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
    }).isRequired
}