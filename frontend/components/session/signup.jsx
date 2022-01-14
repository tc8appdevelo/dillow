import React from 'react';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
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
            password: "password",
        }).then(this.props.handleExitPage)

    }

    render() {
        let buttonText;
        const handleExitPage = this.props.handleExitPage;
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
                   

                    <button className="sign-button"
                            onClick={this.handleSubmit}>Sign In</button>
                </form>
                <div>Or connect with:</div>
                
                <button className='demo-button' onClick={this.loginDemoUser}>demo user</button>
               
            </div>
        );
    }
};

export default Signup;