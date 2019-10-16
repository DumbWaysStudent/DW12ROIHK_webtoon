'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    id_user: DataTypes.INTEGER,
    id_webtoon: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
    favorite.belongsTo(models.webtoons, {
      as:'webtoon_id',
      foreignKey: 'id_webtoon'
    }),
    favorite.belongsTo(models.users, {
      as:'user',
      foreignKey: 'id_user'
    })
  };
  return favorite;
};