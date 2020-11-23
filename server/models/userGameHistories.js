import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class userGameHistories extends Model {
    static associate(models) {
      const { userGames } = models;

      userGameHistories.belongsTo(userGames, { foreignKey: 'userId', as: 'userData' });
    }
  }
  userGameHistories.init({
    historyId: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: 4,
        notEmpty: true,
      },
    },
    timestamps: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    userId: {
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: true,
      },
    },
    player_choice: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['rock', 'paper', 'scissor']],
      },
    },
    comp_choice: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['rock', 'paper', 'scissor']],
      },
    },
    result: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['PLAYER WIN', 'COM WIN', 'DRAW']],
      },
    },
  }, {
    sequelize,
    modelName: 'userGameHistories',
    timestamps: false,
  });
  return userGameHistories;
};
