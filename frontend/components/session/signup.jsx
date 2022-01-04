import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
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
            <div className="session-form">
                <h2>{this.props.formType}</h2>
                <form>
                    <label>Email:
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <Link to={this.props.buttonRoute}>{`${buttonText}`}</Link>
                <button onClick={this.loginDemoUser}>Login as demo user</button>
                <button onClick={this.loginDemoUserTestPage}>Login and go to test nav page</button>
            </div>
        );
    }
};

export default Signup;