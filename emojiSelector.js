const data = require('/Users/bencso/Desktop/data.json');
const emojiList = Object.keys(require('./emojilist.json'));

const selector = (function () {
  let emojis = {};
  let findEmoji = function(data) {
    let textArray = data.text.split(' ');
    textArray.forEach( function(item) {
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

  return {
    findEmoji: findEmoji
  };

})();

console.log(selector.findEmoji(data));
