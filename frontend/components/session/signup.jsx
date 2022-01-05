import React from 'react';
import {Link} from 'react-router-dom';
import { ReactDOM } from 'react';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
        this.loginDemoUserTestPage = this.loginDemoUserTestPage.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.formAction(this.state)
    }

    loginDemoUser() {
        this.props.loginAction({
            email: "demo_user",
            password: "password"
        })
    }
    loginDemoUserTestPage() {
        this.props.loginAction({
            email: "demo_user",
            password: "password"
        }).then(this.props.history.push('/test'))
    }



    render() {
        let buttonText;


        if (this.props.formType === 'Create Account') {
            buttonText = 'Go to Login';
        } else {
            buttonText = 'Create Account';
        }
        return (
            <div id="session-form-container">
                <h2>{this.props.formType}</h2>
                <form id="session-form">
                    <div>Email</div>
                     <input
                        className="form-input"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                    <div>Password</div>
                    <input
                        className="form-input"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                   

                    <button className="form-button" onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <div>Or connect with:</div>
                <div>
                    <button onClick={this.loginDemoUser}>Login as demo user</button>
                </div>
            </div>
        );
    }
};

export default Signup;