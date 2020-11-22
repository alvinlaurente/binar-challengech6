module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userGames', {
      userId: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userGames');
  },
};
