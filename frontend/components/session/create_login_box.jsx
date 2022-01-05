import React from 'react';
import { Link, NavLink } from 'react-router-dom';



class CreateLoginBox extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className="create-login-box">
            <Link to="/login">login</Link>
            </div>
        )
    }
}

export default CreateLoginBox;