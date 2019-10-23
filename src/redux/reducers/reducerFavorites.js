import * as types from '../types'

const initialState = {
  Favorites: []
};

export default function reducerFavorites(state = initialState, action) {
  switch (action.type) {
    case types.GET_FAVORITES:
      return {
        ...state,
        Favorites: action.payload
      };
    default:
      return state;
  }
}