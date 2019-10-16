'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [
      {
        page: 1,
        image: 'https://via.placeholder.com/1080',
        episodeId: 1,
      },
      {
        page: 2,
        image: 'https://via.placeholder.com/1023',
        episodeId: 1,
      },
      {
        page: 1,
        image: 'https://via.placeholder.com/1020',
        episodeId: 2,
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
