module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userGameBiodata', {
      userId: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
        references: {
          model: 'userGames',
          key: 'userId',
        },
        onDelete: 'cascade',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: true,
        type: Sequelize.ENUM,
        values: ['m', 'f', 'null'],
      },
      dob: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userGameBiodata');
  },
};
