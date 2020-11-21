module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userGameHistories', [
      {
        historyId: 'e016ffe8-38cd-4687-8d2e-8cf2e6706bd8',
        timestamps: new Date().toISOString(),
        userId: '3d0d8eb9-7a48-442f-914d-7ed1445f6bdd',
        player_choice: 'rock',
        comp_choice: 'paper',
        result: 'COM WIN',
      }, {
        historyId: '0c513f69-e493-4d13-8aea-c7fbba8dae8e',
        timestamps: new Date().toISOString(),
        userId: 'e2042fb4-925e-4ccd-a7c3-9f3a602511e6',
        player_choice: 'rock',
        comp_choice: 'scissor',
        result: 'PLAYER WIN',
      }, {
        historyId: '1583f5d6-48f1-4c93-8109-09e2780942bc',
        timestamps: new Date().toISOString(),
        userId: 'e2042fb4-925e-4ccd-a7c3-9f3a602511e6',
        player_choice: 'paper',
        comp_choice: 'paper',
        result: 'DRAW',
      }, {
        historyId: '6d4d9d15-bb8c-4cd1-9dcb-a9c597129993',
        timestamps: new Date().toISOString(),
        userId: 'e2042fb4-925e-4ccd-a7c3-9f3a602511e6',
        player_choice: 'paper',
        comp_choice: 'scissor',
        result: 'COM WIN',
      }, {
        historyId: 'ba45b5e6-0489-4ed8-8f1b-f3a964c77108',
        timestamps: new Date().toISOString(),
        userId: '95cf7a67-7738-45af-b207-3a0542aa3f3f',
        player_choice: 'scissor',
        comp_choice: 'paper',
        result: 'PLAYER WIN',
      }, {
        historyId: '55655401-966d-4318-b78e-1a34bd29f5dc',
        timestamps: new Date().toISOString(),
        userId: '95cf7a67-7738-45af-b207-3a0542aa3f3f',
        player_choice: 'rock',
        comp_choice: 'rock',
        result: 'DRAW',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userGameHistories', null, {});
  },
};
