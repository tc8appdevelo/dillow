import { CLEAR_FILTER, UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
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
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    }
    return Object.assign({}, state, newFilter);
  } else if (action.type === CLEAR_FILTER) {
    return action.filters
  } else {
    return state;
  }
}

export default filtersReducer;