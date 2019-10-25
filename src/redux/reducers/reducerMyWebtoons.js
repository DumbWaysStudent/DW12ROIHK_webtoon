import * as types from '../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  needRefresh: false,
  webtoons: [{
    data: [
      {
        title: 'a',
        genre: 'Barton waited twenty always repair in within we do.',
        image: 'https://via.placeholder.com/1080',
        favorite_count: 42,
        isFavorite: 1,
        create_by: 1
      },
      {
        title: 'b',
        genre: 'Barton waited twenty always repair in within we do.',
        image: 'https://via.placeholder.com/1020',
        favorite_count: 44,
        isFavorite: 0,
        create_by: 2
      }
    ]
  }]
};

export default function reducerMyWebtoons(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_MY_WEBTOONS}_PENDING`:
      return {
        ...state,
        isLoading: true,
        needRefresh: false,
      };

    case `${types.GET_MY_WEBTOONS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        needRefresh: false,
        webtoons: action.payload
      };

    case `${types.GET_MY_WEBTOONS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        needRefresh: false,
      };

    //==============================Add My Webtoon==============================//
    case `${types.ADD_MY_WEBTOONS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.ADD_MY_WEBTOONS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        needRefresh: true,
        webtoons: action.payload
      };

    case `${types.ADD_MY_WEBTOONS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //==============================Delete My Webtoon==============================//
    case `${types.DELETE_MY_WEBTOONS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.DELETE_MY_WEBTOONS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        needRefresh: true,
        webtoons: action.payload
      };

    case `${types.DELETE_MY_WEBTOONS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    //==============================Update My Webtoon==============================//
    case `${types.UPDATE_MY_WEBTOONS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.UPDATE_MY_WEBTOONS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        needRefresh: true,
        webtoons: action.payload
      };

    case `${types.UPDATE_MY_WEBTOONS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}