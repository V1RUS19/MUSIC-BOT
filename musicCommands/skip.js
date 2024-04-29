const { joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');
const { EmbedBuilder } = require('discord.js');
const { dequeue, playNextSong, playSong } = require('./play');
const { queue } = require('./play');

module.exports = {
  name: 'skip',
  description: 'Пропустить текущую песню',
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setDescription('🐼 Чтобы использовать эту команду, вам необходимо находиться в голосовом канале!');
      return message.reply({ embeds: [embed] });
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    if (connection.state.status === VoiceConnectionStatus.Ready) {
      if (queue.length > 0) {
        const nextSong = dequeue();
        await playSong(connection, nextSong.searchQuery, nextSong.message);

        const embed = new EmbedBuilder()
           .setColor('#2b71ec')
     .setAuthor({
          name: 'Skipped Song!',
          iconURL: 'https://cdn.discordapp.com/attachments/1175488636033175602/1175488721253052426/right-chevron-.png?ex=656b6a2e&is=6558f52e&hm=7a73aa51cb35f25eba52055c7b4a1b56bbf3a6d150643adc15b52dc533236956&',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
          .setDescription('**предпочтение\'переходим к следующему такту**');
        return message.reply({ embeds: [embed] });
      } else {
        const embed = new EmbedBuilder()
          .setColor('#FFFF00')
          .setDescription('**❌ В очереди нет песен, которые можно пропустить.**');
        return message.reply({ embeds: [embed] });
      }
    } else {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setDescription('**❌ Нет песни, которую можно было бы пропустить. Очередь пуста.**');
      return message.reply({ embeds: [embed] });
    }
  },
};
