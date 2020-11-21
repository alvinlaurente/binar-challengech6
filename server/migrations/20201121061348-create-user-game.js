module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userGames', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      username: {
        allowNull: false,
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
