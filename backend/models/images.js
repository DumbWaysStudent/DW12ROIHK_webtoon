'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episodeId: DataTypes.INTEGER,
  }, {});
  images.associate = function(models) {
    // associations can be defined here
    images.belongsTo(models.episodes, {
      as:'episode',
      foreignKey: 'episodeId'
    })
  };
  return images;
};