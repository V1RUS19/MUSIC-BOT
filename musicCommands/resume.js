const playModule = require('./play.js');
const { VoiceConnectionStatus } = require('@discordjs/voice');
module.exports = {
  name: 'resume',
  description: 'Возобновить приостановленное воспроизведение музыки',
  execute: (message, args) => {
    const currentConnection = playModule.getCurrentConnection();
    if (currentConnection && currentConnection.state.status === VoiceConnectionStatus.Ready) {
      playModule.resume();
    } else {
      message.reply('❌ Бот в настоящее время не воспроизводит музыку.');
    }
  },
};
