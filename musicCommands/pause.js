const { VoiceConnectionStatus } = require('@discordjs/voice');
const playModule = require('./play.js');

module.exports = {
  name: 'pause',
  description: 'Приостановить воспроизведение музыки',
  execute: (message, args) => {
    const currentConnection = playModule.getCurrentConnection();
    if (currentConnection && currentConnection.state.status === VoiceConnectionStatus.Ready) {
      playModule.pause();
    } else {
      message.reply('❌ The bot is not currently playing any music.');
    }
  },
};
