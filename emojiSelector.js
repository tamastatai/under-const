const data = require('/Users/bencso/Desktop/data.json');
const emojiList = require('./emojilist.json');

const selector = ( () => {

  let findEmoji = (data) => {
    let emojis = {};
    let textArray = data.text.split(' ');
    textArray.forEach( (item) => {
      if (Object.keys(emojiList).includes(item)) {
        if (Object.keys(emojis).includes(item)) {
          emojis[item]+=1;
        } else {
          emojis[item] = 1;
        };
      };
    });
    return emojis;
  };

  let getMessageData = (data) => {
    let emojiNumber = 0;
    let textArray = data.text.split(' ');
    textArray.forEach( (emoji) => {
      if (Object.keys(emojiList).includes(emoji)) {
        emojiNumber++;
      };
    });
    return emojiNumber;
  };

  let sendData = (data) => {
    return {
      "channel_id": data.channel_id,
      "text_length": data.text.length,
      "emojis": selector.getMessageData(data)
    }
  };

  return {
    getMessageData: getMessageData,
    sendData: sendData
  };


})();

// console.log(selector.getMessageData(data));

console.log(selector.sendData(data));
