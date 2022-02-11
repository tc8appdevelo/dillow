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
        this.showErrors = this.showErrors.bind(this);
    }



    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.formAction(this.state).then(() => this.props.fetchSavedListings()).then(this.props.handleExitPage)
    }

    loginDemoUser() {
        this.props.loginAction({
            email: "demo_user",
            password: "password",
        }).then(() => this.props.fetchSavedListings()).then(this.props.handleExitPage)

    }

    showErrors() {
        if (this.props.errors[0]) {
            return (
                <div>
                    {this.props.errors.map((error, idx) => (
                        <div
                            className='error'
                            key={idx}>
                            {error}
                        </div>))}
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        let buttonText;
        const handleExitPage = this.props.handleExitPage;
        let errors = this.showErrors();
        if (this.props.formType === 'Create Account') {
            buttonText = 'Go to Login';
        } else {
            buttonText = 'Create Account';
        }
        return (
            <div id="session-form-container">
                {errors}
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