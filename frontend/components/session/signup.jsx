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
                
                <form className="session-form">
                    <div className='input-title'>Email</div>
                     <input
                        className="form-input"
                        placeholder='Enter email'
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                    <div className='input-title'>Password</div>
                    <input
                        className="form-input"
                        type="password"
                        placeholder='Enter password'
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                   

                    <button className="sign-button"
                            onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>

                <div className='w-div'>Forgot your password?</div>
                
                <div className='or-sign-with-btns'>
                    <div className='words-div'>Or connect with:</div>
                    <button className="demo-button" onClick={this.loginDemoUser}>demo user</button>
                    <button className="apple-button" onClick={this.loginDemoUser}>Continue with Apple</button>
                    <button className="facebook-button" onClick={this.loginDemoUser}>Continue with Facebook</button>
                    <button className="google-button" onClick={this.loginDemoUser}>Continue with Google</button>
                </div>
                   
                
                
               
            </div>
        );
    }
};

export default Signup;