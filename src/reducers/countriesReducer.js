import { types } from 'actions';

export default function(state = [], action) {
  const { countries, error } = action;
  switch(action.type) {
    case types.GET_COUNTRIES_SUCCESS:
      return [...state, ...countries];
    case types.GET_COUNTRIES_ERROR:
      return { error };
    default:
      return state;
  }
};
//ADD_COUNTRY_SUCCESS