import * as types from './../types'

export const handleGetFavorites = () => ({
  type: types.GET_FAVORITES,
  payload: [
    {
        title: 'Webtoon 1',
        genre: 'action',
        image: 'https://via.placeholder.com/1080',
        favorite_count: 42,
        isFavorite: 1,
        create_by:1
      },
      {
        title: 'Webtoon 2',
        genre: 'comedy.',
        image: 'https://via.placeholder.com/1020',
        favorite_count: 44,
        isFavorite: 0,
        create_by:2
      },
  ]
});