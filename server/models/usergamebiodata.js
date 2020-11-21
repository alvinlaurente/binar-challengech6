import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class userGameBiodata extends Model {
    static associate(models) {
      const { userGame } = models;

      userGameBiodata.belongsTo(userGame, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }
  userGameBiodata.init({
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'userGameBiodata',
    timestamps: false,
  });
  return userGameBiodata;
};
