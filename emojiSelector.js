// const data = require('./data.json');
const emojiList = [":joy:", ":clown-face:", ":yo:"];
const emojiScore = {
  ":joy:": 1
};

let emojis = {
  ":joy:": 1
};

function findEmoji(data) {
  let textArray = data.text.split(' ');
  textArray.forEach( function(item) {
      if (emojiList.includes(item)) {
        console.log(item);
        if (Object.keys(emojis).includes(item)) {
          emojis[item]+=1;
        } else {
          emojis[item] = 1;
        }
      }
    });
});

console.log(emojis);
