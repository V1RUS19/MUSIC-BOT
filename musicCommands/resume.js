константа playModule = Требоват('./play.js');
константа { VoiceConnectionStatus } = Требоват('@дискордджс/голос');
модуль.экспорт = {
  Имя: 'резюме',
  Описание: 'Возобновить приостановленное воспроизведение музыки',
  выполнять: (сообщение, аргументы) => {
    константа currentConnection = playModule.getCurrentConnection();
    ЕСЛИ (текущее соединение &amp;&amp; текущее соединение.состояние.Положение дела === Статус голосового решения.Готовый) {
      playModule.резюме();
    } еще {
      сообщение.Отвечать('❌ Бот в настоящее время не воспроизводит музыку.');
    }
  },
};
