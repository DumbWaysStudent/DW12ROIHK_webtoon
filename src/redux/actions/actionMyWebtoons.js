import * as types from './../types'
import axios from 'axios'

export const handleGetMyWebtoons = (param) => ({
  type: types.GET_MY_WEBTOONS,
  payload: axios({
    method: 'GET',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoons`,
    headers: {
      Authorization: `bearer ${param.token}`
    }
  })
});

export const handleAddMyWebtoons = (param) => ({
  type: types.ADD_MY_WEBTOONS,
  payload: axios({
    method: 'POST',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoon`,
    headers: {
      Authorization: `bearer ${param.token}`
    },
    data: param.data
  })
});

export const handleDeleteMyWebtoons = (param) => ({
  type: types.DELETE_MY_WEBTOONS,
  payload: axios({
    method: 'DELETE',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoon/${param.webtoon}`,
    headers: {
      Authorization: `bearer ${param.token}`
    }
  })
});

export const handleUpdateMyWebtoons = (param) => ({
  type: types.UPDATE_MY_WEBTOONS,
  payload: axios({
    method: 'PATCH',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoon/${param.webtoon}`,
    headers: {
      Authorization: `bearer ${param.token}`
    },
    data: param.data
  })
});