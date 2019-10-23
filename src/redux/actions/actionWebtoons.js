import * as types from './../types'
import axios from 'axios'

export const handleGetWebtoons = () => ({
  type: types.GET_WEBTOONS,
  payload: axios.get('https://positive-toon-rest-api.herokuapp.com/api/v1/webtoons')
});
