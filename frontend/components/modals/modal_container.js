import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Modal from "./modal";

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