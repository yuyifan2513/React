import { Component} from 'react'

export default class Login extends Component {
    state = {
        mobile: '123456789',
        isAgree: false

    }
    changeValue(e) {
        const {mobile} = this.state
        this.setState({
            mobile: e.target.value
        })
    }
    changeAgree(e) {
        this.setState({
            isAgree: e.target.checked
        })
    }
    getStateValue() {
        console.log(this.state);
    }
    render() {
        const {mobile,isAgree} = this.state
        return (
            <>
                <div>
                    <input type="text" value={mobile} onChange={e => this.changeValue(e)} />
                </div>
                <p>{mobile}</p>
                <div>
                    <input onChange={e => this.changeAgree(e)}checked={isAgree} type="checkbox" name="" id="ck" />
                    <label htmlFor="ck">同意隐私条款</label>
                </div>
                <p>{isAgree + ""}</p>
                <button onClick={this.getStateValue.bind(this)}>获取值</button>
            </>
        )
    }
}