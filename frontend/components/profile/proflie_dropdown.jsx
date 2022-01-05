import React from 'react';
import { Link } from 'react-router-dom';

class ProfileDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="drop-down">
                <Link to="/">Homes for sale</Link>
                <Link to="/">Foreclosures</Link>
                <Link to="/">For sale by owner</Link>
                <Link to="/">Open houses</Link>
            </div>
        )
    }
}

export default ProfileDropdown;