exports.textProcessMessage = (instance, msg) => {
  console.log(msg.text);
  instance.sendMessage(msg.chat.id, 'Привет, Друг! чего хочешь?');
};