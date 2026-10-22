
const mineflayer = require('mineflayer');

const config = {
  host: 'play.glorymc.dpdns.org',
  port: 25565,
  username: 'Glory Mc',
  version: '1.21.4'
};

let bot;
let reconnectTimer;

function startBot() {
  bot = mineflayer.createBot(config);

  bot.on('spawn', () => {
    console.log('Glory Mc is online!');

    bot.chat('Welcome to Glory MC');

    setInterval(() => {
      if (bot.entity) {
        bot.chat('Welcome to Glory MC');
      }
    }, 120000);
  });

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting...');
    clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(startBot, 10000);
  });

  bot.on('error', err => console.log(err.message));
}

startBot();
