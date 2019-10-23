import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    images: []
};

export default function reducerMyImages(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_MY_IMAGES}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_MY_IMAGES}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                images: action.payload
            };

        case `${types.GET_MY_IMAGES}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        //========================add my image========================//           
        case `${types.ADD_MY_IMAGES}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.ADD_MY_IMAGES}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                images: action.payload
            };

        case `${types.ADD_MY_IMAGES}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };


        //========================delete my image========================//           
        case `${types.DELETE_MY_IMAGES}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.DELETE_MY_IMAGES}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                images: action.payload
            };

        case `${types.DELETE_MY_IMAGES}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
}