import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';


function mSTP(state) {
    return ({
      filters: state.filters
    });
}

function mDTP(dispatch) {
    return ({
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    });
}

export default withRouter(connect(mSTP, mDTP)(SearchBar));