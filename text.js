exports.textProcessMessage = (instance, msg) => {
  console.log(msg.text);
  instance.sendMessage(msg.chat.id, 'Друг мой! Введи фразу, что не даёт покоя тебе, и услади слух свой композицией, где фраза приевшаяся');
};