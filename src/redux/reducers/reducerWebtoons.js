import * as types from '../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  webtoons: [{
    title: 'Webtoon 1',
    genre: 'Barton waited twenty always repair in within we do.',
    image: 'https://via.placeholder.com/1080',
    favorite_count: 42,
    isFavorite: 1,
    create_by: 1
  },
  {
    title: 'Webtoon 2',
    genre: 'Barton waited twenty always repair in within we do.',
    image: 'https://via.placeholder.com/1020',
    favorite_count: 44,
    isFavorite: 0,
    create_by: 2
  }],

};

export default function reducerWebtoons(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_WEBTOONS}_PENDING`:
      return {
        ...state,
        isLoading: true,
        webtoons: state.webtoons
      };

    case `${types.GET_WEBTOONS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        webtoons: action.payload
      };

    case `${types.GET_WEBTOONS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        webtoons: state.webtoons
      };
    default:
      return state;
  }
}