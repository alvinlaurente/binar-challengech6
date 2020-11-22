module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userGames', [
      {
        userId: '3d0d8eb9-7a48-442f-914d-7ed1445f6bdd',
        email: 'alphagamer@gmail.com',
        username: 'alphagamer1',
        password: 'alphagamer1',
      }, {
        userId: 'e2042fb4-925e-4ccd-a7c3-9f3a602511e6',
        email: 'betagamer@ymail.com',
        username: 'betagamer1',
        password: 'betagamer1',
      }, {
        userId: '95cf7a67-7738-45af-b207-3a0542aa3f3f',
        email: 'charliegamer@live.com',
        username: 'charliegamer1',
        password: 'charliegamer1',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userGames', null, {});
  },
};
