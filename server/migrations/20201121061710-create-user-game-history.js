module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userGameHistories', {
      timestamps: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'userGames',
          key: 'userId',
        },
        onDelete: 'set null',
      },
      player_choice: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      comp_choice: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      result: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userGameHistories');
  },
};
