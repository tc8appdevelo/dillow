import React from 'react';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            isCreate: false
        }
        this.toggleLoginCreate = this.toggleLoginCreate.bind(this);
    }

    toggleLoginCreate = () => this.setState(state => ({
        isCreate: !state.isCreate
    }))

    render() {
        let create = this.state.isCreate;
        return (
            <div>
                <button onClick={this.toggleLoginCreate} disabled={!create} id="createbtn">Sign in</button>
                <button onClick={this.toggleLoginCreate}  disabled={create} id="loginbtn">New account</button>
                 {create ? <SignupContainer /> : <LoginContainer />}
            </div>
        )
    }
}

export default LoginPage;