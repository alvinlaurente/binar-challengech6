import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class userGameHistory extends Model {
    static associate(models) {
      const { userGame } = models;

      userGameHistory.belongsTo(userGame, { foreignKey: 'userID', as: 'userData' });
    }
  }
  userGameHistory.init({
    timestamps: {
      primaryKey: true,
      type: DataTypes.DATETIME,
      defaultValue: Sequelize.NOW,
    },
    userId: DataTypes.UUID,
    player_choice: DataTypes.STRING,
    comp_choice: DataTypes.STRING,
    result: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'userGameHistory',
    timestamps: false,
  });
  return userGameHistory;
};
