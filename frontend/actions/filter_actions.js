import { fetchListings } from "./listing_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const resetFilter = () => ({
  type: CLEAR_FILTER,
})

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchListings(getState().filters)(dispatch);
}

export const clearFilter = () => (dispatch, getState) => {
  dispatch(resetFilter());
  return fetchListings(getState().filters)(dispatch);
}