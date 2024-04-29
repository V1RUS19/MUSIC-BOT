
константа { EmbedBuilder } = Требоват('дискорд.js');
константа { getPlayer } = Требоват('./играть');

модуль.экспорт = {
  Имя: 'объем',
  Описание: 'Регулируйте громкость бота',
  выполнять: асинхронный (сообщение, аргументы) => {
    константа volume = анализироватьFloat(аргументы[0]);

    ЕСЛИ (isNaN(объем) || объем < 0 || объем > 100) {
      возвращаться сообщение.Отвечать('❌ Укажите допустимый уровень громкости от 0 до 100.');
    }
    константа player = getPlayer();

    ЕСЛИ (!игрок) {
      возвращаться сообщение.Отвечать('❌ В настоящее время музыка не воспроизводится.');
    }
    константа resource = игрок.состояние.ресурс;

    ЕСЛИ (!ресурс) {
      возвращаться сообщение.Отвечать('❌ Аудиоресурс не найден.');
    }
    ресурс.объем.setVolume(объем / 100);

    константа embed = новый EmbedBuilder()
      .setColor('#2b71ec')
     .setAuthor({
          Имя: 'Контроль громкости!',
          значокURL: 'https://cdn.discordapp.com/attachments/1175488636033175602/1175488721546645624/volume.png?ex=656b6a2e&amp;is=6558f52e&amp;hm=8215d2f88ab073db1f3b6438c28fd73315ad7e 581bb54000dbb06fca387cecf7&',
          URL: 'https://discord.gg/FUEHs7RCqz'
        })
      .setDescription(`**объем занят ${объем}%**`);

    сообщение.Отвечать({ встраивает: [вставлять] });
  },
};
