exports.photosProcessMessage = (instance, msg) => {
  console.log('photo');
  instance.sendMessage(msg.chat.id, 'Привет, Друг! чего хочешь?');
};