import React from 'react';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exitPage: props.exitPage,
            isCreate: false,
        }
        this.toggleLoginCreate = this.toggleLoginCreate.bind(this);
    }

    toggleLoginCreate = () => this.setState(state => ({
        isCreate: !state.isCreate
    }))

    render() {
        let create = this.state.isCreate;
        let handleExitPage = this.state.exitPage;
        return (
            <div id="login-col-outer">
                <div id="login-row-topbar">
                    <div>
                        <button onClick={this.toggleLoginCreate} 
                                disabled={!create} id="createbtn">Sign in</button>
                        <button onClick={this.toggleLoginCreate} 
                                disabled={create} id="loginbtn">New account</button>
                    </div>
                    <button onClick={handleExitPage} className="exit-button">X</button>
                </div>
                {create ? <SignupContainer handleExitPage={handleExitPage} /> : 
                          <LoginContainer handleExitPage={handleExitPage} />}
            </div>
        )
    }
}

export default LoginPage;