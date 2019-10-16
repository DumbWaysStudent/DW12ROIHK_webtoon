'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    isFavorite: DataTypes.INTEGER,
    favorite_count: DataTypes.INTEGER,
    create_by: DataTypes.INTEGER
  }, {});
  webtoons.associate = function(models) {
    // associations can be defined here
    webtoons.belongsTo(models.users, {
      as:'Owner',
      foreignKey: 'created_by'
    })
  };
  return webtoons;
};