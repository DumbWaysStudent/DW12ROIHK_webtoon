import * as types from './../types'
import axios from 'axios'

export const handlePostUsers = (data) => ({
  type: types.POST_USERS,
  payload: axios.post('https://positive-toon-rest-api.herokuapp.com/api/v1/login',
  data)
});

export const handleGetUsers = (params) => ({
  type: types.GET_USERS,
  payload: axios({
    method: 'get',
    url:`https://positive-toon-rest-api.herokuapp.com/api/v1/user/${params.user}`,
    headers: {
      Authorization: `bearer ${params.token}`
    }
  })
});