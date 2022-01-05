import React from 'react'
import BuyDropdown from './buy_dropdown'

const DropWrapper = ({show}) =>  {
    debugger
    return (<div style={{ visibility: show ? "visible" : "hidden" }}>
            <BuyDropdown />
            </div>)
}

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleDropdownState = () => this.setState(state => ({
        isDropdown: !state.isDropdown
    }))

    render() {
        return (
            <div>
                <DropWrapper show={this.state.isDropdown} />
            </div>
        )
    }
}

export default Dropdown;