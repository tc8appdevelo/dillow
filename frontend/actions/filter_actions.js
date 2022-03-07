import { fetchListings } from "./listing_actions";

export const defaultFilters = {
  bounds: {},
  price_range: {
    min: "none",
    max: "none"
  },
  city: "none",
  state: "none",
  zip_code: "none",
  beds_baths: {
    bedrooms: "none",
    bathrooms: "none",
  },
  home_types: {
    house: true,
    town_home: true,
    multi_family: true,
    condo: true,
    land: true,
    apartment: true,
    manufactured: true
  },
  location: "none",
}

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const resetFilter = (filters) => ({
  type: CLEAR_FILTER,
  filters
})

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchListings(getState().filters)(dispatch);
}

export const clearFilter = (filters) => (dispatch, getState) => {
  dispatch(resetFilter(filters));
  return fetchListings(getState().filters)(dispatch);
}