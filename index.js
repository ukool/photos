const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api
const token = '1280963906:AAFolefiCW9sKRAv9ozbn-kutwmb0siGCd8';

//конфиг клавиатуры
const keyboard = [
  [
    {
      text: 'Хочу кота', // текст на кнопке
      callback_data: 'moreKeks' // данные для обработчика событий
    }
  ],
  [
    {
      text: 'Хочу песика',
      callback_data: 'morePes'
    }
  ],
  [
    {
      text: 'Хочу проходить курсы',
      url: 'https://htmlacademy.ru/continue' //внешняя ссылка
    }
  ]
];

const bot = new TelegramBot(token, {polling: true});

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'Привет, Друг! чего хочешь?', { // прикрутим клаву
    reply_markup: {
      inline_keyboard: keyboard
    }
  });
});

// обработчик событий нажатий на клавиатуру
// bot.on('callback_query', (query) => {
//   const chatId = query.message.chat.id;
//
//   let img = '';
//
//   if (query.data === 'moreKeks') { // если кот
//     img = 'keks.png';
//   }
//
//   if (query.data === 'morePes') { // если пёс
//     img = 'pes.png';
//   }
//
//   if (img) {
//     bot.sendPhoto(chatId, img, { // прикрутим клаву
//       reply_markup: {
//         inline_keyboard: keyboard
//       }
//     });
//   } else {
//     bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
//       reply_markup: {
//         inline_keyboard: keyboard
//       }
//     });
//   }
// });