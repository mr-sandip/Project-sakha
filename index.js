const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'mr_sandip.aternos.me',
  port: 62409,
  username: 'SakhaAI',
  version: '1.20.1'
});

bot.on('login', () => {
  console.log('SakhaAI joined the server!');
});

bot.on('spawn', () => {
  bot.chat('Hello! Mu SakhaAI 😊');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if (message === 'hi') {
    bot.chat('Hello ' + username + '!');
  }

  if (message === 'come') {
    bot.chat('Mu asuchi!');
  }
});

bot.on('error', console.log);
bot.on('end', () => console.log('Disconnected'));
