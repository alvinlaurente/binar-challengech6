module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userGameBiodata', {
      userId: {
        allowNull: false,
        primaryKey: true,
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
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: true,
        type: Sequelize.ENUM,
        values: ['m', 'f'],
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
