// 新建组件

function HelloWorld () {
    return null
}

function Header() {
    return <div>头部内容</div>
}

function Body() {
    return <div>主题内容</div>
}

function Footer() {
    return <div>底部内容</div>
}

const App = () => {
    return (
        <>
         <Header></Header>
         <Body></Body>
         <Footer></Footer>
        </>
    )
}

export default App