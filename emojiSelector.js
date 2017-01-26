const data = require('/Users/bencso/Desktop/data.json');
const emojiList = [":joy:", ":clown-face:", ":yo:"];
const emojiScore = {
  ":joy:": 1
};

const selector = (function () {
  let emojis = [];
  let findEmoji = function(data) {
    let textArray = data.text.split(' ');
    textArray.forEach( function(item) {
      if (emojiList.includes(item)) {
        emojis.push(item);
      };
    });
    return emojis;
  };

  return {
    findEmoji: findEmoji
  };

})();

// selector.findEmoji(data);
console.log(selector.findEmoji(data));
