import * as types from './../types'
import axios from 'axios'

export const handleGetMyEpisodes = (param) => ({
  type: types.GET_MY_EPISODES,
  payload: axios({
    method: 'GET',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoon/${param.webtoon}/episodes`,
    headers: {
      Authorization: `bearer ${param.token}`
    }
  })
});

export const handleAddMyEpisodes = (param) => ({
  type: types.ADD_MY_EPISODES,
  payload: axios({
    method: 'POST',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}/webtoon/${param.webtoon}/episode`,
    headers: {
      Authorization: `bearer ${param.token}`
    },
    data: param.data
  })
});

export const handleDeleteMyEpisodes = (param) => ({
  type: types.DELETE_MY_EPISODES,
  payload: axios({
    method: 'DELETE',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}
    /webtoon/${param.webtoon}/episode/${param.episode}`,
    headers: {
      Authorization: `bearer ${param.token}`
    }
  })
});

export const handleUpdateMyEpisodes = (param) => ({
  type: types.DELETE_MY_EPISODES,
  payload: axios({
    method: 'PATCH',
    url: `https://positive-toon-rest-api.herokuapp.com/api/v1/user/${param.user}
    /webtoon/${param.webtoon}/episode/${param.episode}`,
    headers: {
      Authorization: `bearer ${param.token}`
    },
    data: param.data
  })
});