import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class userGameBiodata extends Model {
    static associate(models) {
      const { userGames } = models;

      userGameBiodata.belongsTo(userGames, { foreignKey: 'userId', onDelete: 'cascade' });
    }
  }
  userGameBiodata.init({
    userId: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: 4,
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['m', 'f', 'null'],
      validate: {
        isIn: [['m', 'f', 'null']],
      },
    },
    dob: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'userGameBiodata',
    timestamps: false,
  });
  return userGameBiodata;
};
