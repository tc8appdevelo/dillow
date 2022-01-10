import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    return (
        <div className="listing-modalj-background" onClick={closeModal}>
            <div className="listing-modal" onClick={e => je.stopPropagation()}>
                <div>Modal</div>
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        modal: state.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);