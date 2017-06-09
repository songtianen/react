import React from 'react'

class C extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.changeUserInfo.bind(this)}>修改</button>
            </div>
        )
    }
    changeUserInfo() {

      let ac = this.props.actions
        ac.login({
            userid: '123',
            city: 'nanjing'
        })
    }
}

export default C
