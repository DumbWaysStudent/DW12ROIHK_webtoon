'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'ep.1',
        image: 'https://via.placeholder.com/1080',
        webtoonId: 1,
      },
      {
        title: 'ep.2',
        image: 'https://via.placeholder.com/1080',
        webtoonId: 1,
      },
      {
        title: 'ep.1',
        image: 'https://via.placeholder.com/1080',
        webtoonId: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
