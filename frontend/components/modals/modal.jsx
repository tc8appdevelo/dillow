import React from "react";


class Modal extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     closeModal: null
        // }

    }

    // componentDidMount() {
    //     this.setState({
    //         closeModal: this.props.closeModal
    //     })

    // }

    render() {
        //let closeModal = this.state.closeModal;
        
        return (
            <div className="listing-modalj-background" >
                <div className="listing-modal" onClick={e => e.stopPropagation()}>
                    <div>HELLO</div>
                </div>
            </div>
        )
    }

}

export default Modal;

