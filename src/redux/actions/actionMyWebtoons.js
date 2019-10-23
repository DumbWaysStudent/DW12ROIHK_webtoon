import * as types from './../types'
import axios from 'axios'

export const handleGetMyWebtoons = (param) => ({
    type: types.GET_MY_WEBTOONS,
    payload: axios({
      method: 'GET',
      url:`https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoons`,
      headers: {
        Authorization: `bearer ${param.token}`
      }
    })
  });