const fs = require('fs')
var https = require('https');
const sharp = require('sharp');

const reaction = [
  'reaction-00001.webp',
  'reaction-00002.webp',
  'reaction-00003.webp',
  'reaction-00004.webp',
  'reaction-00005.webp',
  'reaction-00006.webp',
  'reaction-00007.webp',
  'reaction-00008.webp',
  'reaction-00009.webp',
  'reaction-00010.webp',
  'reaction-00011.webp',
  'reaction-00012.webp',
  'reaction-00013.webp',
  'reaction-00014.webp',
  'reaction-00015.webp',
  'reaction-00016.webp',
  'reaction-00017.webp',
  'reaction-00018.webp',
  'reaction-00019.webp',
  'reaction-00020.webp',
  'reaction-00021.webp',
  'reaction-00022.webp',
  'reaction-00023.webp',
  'reaction-00024.webp',
  'reaction-00025.webp',
  'reaction-00026.webp',
  'reaction-00027.webp',
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let waterMark = './dick/' + reaction[getRandomIntInclusive(0, reaction.length - 1)]

exports.photosProcessMessage = (instance, msg) => {
  // console.log(msg);
  let fileId;
  let filePath;

  instance.getFile(msg.photo[0].file_id)
    .then((data) => {
      fileId = data.file_id;
      filePath = data.file_path;
    })
    .then(() => {
      const url = `https://api.telegram.org/file/bot1280963906:AAFolefiCW9sKRAv9ozbn-kutwmb0siGCd8/${filePath}`

      saveImage(url);

      setTimeout(() => {
        sendPhoto(instance, msg.chat.id)
      }, 2000)
    })
};

function saveImage(url, cb) {
  const file = fs.createWriteStream('./dest.jpg');
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
       // file.close(cb);
    });
  });
};

async function sendPhoto(instanse, chatId) {
  await sharp(waterMark).resize(200, 200).toBuffer()
    .then(data => {
      sharp('/dest.jpg')
        .composite([{
          input: data,
          blend: 'over',
          top: 0,
          left: 0
        }])
        .toFile('./output.jpg', (err, info) => {
        });

  });

  instanse.sendPhoto(chatId, './output.jpg')
}


