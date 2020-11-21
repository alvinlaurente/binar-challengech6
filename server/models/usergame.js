import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class userGame extends Model {
    static associate(models) {
      const { userGameHistory } = models;

      userGame.hasMany(userGameHistory, { foreignKey: 'userID' });
    }
  }
  userGame.init({
    userId: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'userGame',
    timestamps: false,
  });
  return userGame;
};
