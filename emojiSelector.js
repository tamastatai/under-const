const data = require('/Users/bencso/Desktop/data.json');
const emojiList = Object.keys(require('./emojilist.json'));

const selector = ( () => {

  let findEmoji = (data) => {
    let emojis = {};
    let textArray = data.text.split(' ');
    textArray.forEach( (item) => {
      if (emojiList.includes(item)) {
        if (Object.keys(emojis).includes(item)) {
          emojis[item]+=1;
        } else {
          emojis[item] = 1;
        };
      };
    });
    return emojis;
  };

  let setValueToEmoji = (data) => {
    
  };

  return {
    findEmoji: findEmoji
  };

})();

console.log(selector.findEmoji(data));
