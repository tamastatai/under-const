new p5()

// var response = [
//   {
//     channel_id: "C3W3R5UD6",
//     text_length: 22,
//     emojis: 3
//   },
//   {
//     channel_id: "C3W3R5UD6",
//     text_length: 66,
//     emojis: 1
//   },
//   {
//     channel_id: "C3W3R5UD6",
//     text_length: 120,
//     emojis: 2
//   },
//   {
//     channel_id: "channelTwo",
//     text_length: 10,
//     emojis: 0
//   },
//   {
//     channel_id: "channelTwo",
//     text_length: 87,
//     emojis: 2
//   }
// ];

//var response



var channelOne = [];
var channelTwo = [];
var channelThree = [];
var channelFour = [];
var channelFive = [];
var channelSix = [];
var channelSeven = [];
var channelEight = [];
var channelNine = [];
var channelTen = [];
var emojisList = [];
var channelEleven = [];
var emojis = 0;
var xoff = 0;
var yoff = 0;
var randomX;
var randomY;
var counter;

var easing = 0.05;
var targetX = 0
var targetY = 0

var ajax = function (request, url, dataToSend, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(request, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(dataToSend));
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var response = JSON.parse(xhr.response);
      console.log(response, "response");
      callback(response);
    };
  };
};
ajax("GET", "https://under-construction.gomix.me/messages", "", handleData)

var refresh = setInterval(function() {
  ajax("GET", "https://under-construction.gomix.me/messages", "", handleData)
}, 10000)



function handleData(response) {
  channelOne = [];
  channelTwo = [];
  channelThree = [];
  channelFour = [];
  channelFive = [];
  channelSix = [];
  channelSeven = [];
  channelEight = [];
  channelNine = [];
  channelTen = [];
  channelEleven = [];
  emojis = 0;
  emojisList = [];

  for (var i = 0; i < response.length; i++) {

    if(response[i].channel_name === "general") {
      channelOne.push(new drawChannelOne())
      function drawChannelOne () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += map(noise(xoff, yoff), 0, 1, random(-this.speed, this.speed), random(-this.speed, this.speed));
          this.randomY += map(noise(xoff, yoff), 0, 1, random(-this.speed, this.speed), random(-this.speed, this.speed));
        }
        this.display = function() {

          fill(254, 51, 79, 230);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("GENERAL", this.randomX-this.size/4, this.randomY-this.size/1.8);
          xoff += 0.01
          yoff += 0.01
        }
      }
    }

    else if (response[i].channel_name === "fedex-day") {
      channelTwo.push(new drawChannelTwo())
      function drawChannelTwo () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(91, 235, 244, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("FEDEX-DAY", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "sparta") {
      channelThree.push(new drawChannelThree())
      function drawChannelThree () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(80, 175, 151, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("SPARTA", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "lasers") {
      channelFour.push(new drawChannelFour())
      function drawChannelFour () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(247, 169, 34, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("LASERS", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "random") {
      channelFive.push(new drawChannelFive())
      function drawChannelFive () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(0, 75, 116, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("RANDOM", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "raptors") {
      channelSix.push(new drawChannelSix())
      function drawChannelSix () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(202, 94, 66, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("RAPTORS", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "fedex_day") {
      channelSeven.push(new drawChannelSeven())
      function drawChannelSeven () {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(255, 186, 0, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("FEDEX-DAY", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "lasers-nig") {
      channelNine.push(new drawChannelNine())
      function drawChannelNIne() {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(100, 100, 190, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("NIGHTFOX", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    else if (response[i].channel_name === "fedex-robo") {
      channelEleven.push(new drawChannelEleven())
      function drawChannelEleven() {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(103, 191, 140, 200);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("UNDER CONSTRUCTION TEAM", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }


    else {
      channelTen.push(new drawChannelTen())
      function drawChannelTen() {
        this.size = response[i].text_length
        this.randomX = random(windowWidth);
        this.randomY = random(windowHeight);
        this.speed = 2;
        this.move = function() {
          this.randomX += random(-this.speed, this.speed);
          this.randomY += random(-this.speed, this.speed);
        }
        this.display = function() {
          fill(250, 250, 250, 150);
          noStroke();
          ellipse(this.randomX, this.randomY, this.size, this.size);
          textSize(10);
          fill(255);
          text("Others", this.randomX-this.size/4, this.randomY-this.size/1.8);
        }
      }
    }

    emojis += response[i].emojis
  }

  for (var i = 0; i <emojis; i++) {
    emojisList.push(new drawEmoji())
    function drawEmoji() {
      this.size = 40;
      this.randomX = random(windowWidth);
      this.randomY = random(windowHeight);
      this.speed = 2;
      this.move = function() {
        this.randomX += random(-this.speed, this.speed);
        this.randomY += random(-this.speed, this.speed);
      }
      this.display = function() {
        fill(50, 50, 50, 150);
        stroke(255);
        strokeWeight(2)
        ellipse(this.randomX, this.randomY, this.size, this.size);

        fill(255);
        noStroke();
        ellipse(this.randomX - this.size /6, this.randomY -  this.size /8, this.size /6, this.size/6);

        fill(255);
        noStroke();
        ellipse(this.randomX + this.size /6, this.randomY -  this.size /8, this.size /6, this.size/6);

        noFill()
        stroke(255);
        curve(
          this.randomX - this.size /4, this.randomY + this.size /8,
          this.randomX - this.size /6, this.randomY + this.size /4,
          this.randomX + this.size /6, this.randomY + this.size /4,
          this.randomX + this.size /4, this.randomY + this.size /8
        )
      }
    }
  }
  console.log(emojisList[0])
}
//handleData(response);



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  frameRate(120);
  smooth();
  counter = 0;
  console.log(channelThree, "seven")
};


function draw() {
  smooth()
  background(50);

    for (var c = 0; c < channelOne.length; c++) {
      channelOne[c].move();
      channelOne[c].display();

    };
    for (var c = 0; c < channelTwo.length; c++) {
      channelTwo[c].move();
      channelTwo[c].display();
    };
    for (var c = 0; c < channelThree.length; c++) {
      channelThree[c].move();
      channelThree[c].display();
    };
    for (var c = 0; c < channelFour.length; c++) {
      channelFour[c].move();
      channelFour[c].display();
    };
    for (var c = 0; c < channelFive.length; c++) {
      channelFive[c].move();
      channelFive[c].display();
    };
    for (var c = 0; c < channelSix.length; c++) {
      channelSix[c].move();
      channelSix[c].display();
    };
    for (var c = 0; c < channelSeven.length; c++) {
      channelSeven[c].move();
      channelSeven[c].display();
    };
    for (var c = 0; c < channelEight.length; c++) {
      channelEight[c].move();
      channelEight[c].display();
    };
    for (var c = 0; c < channelNine.length; c++) {
      channelNine[c].move();
      channelNine[c].display();
    };
    for (var c = 0; c < channelTen.length; c++) {
      channelTen[c].move();
      channelTen[c].display();
    };
    for (var c = 0; c < channelEleven.length; c++) {
      channelEleven[c].move();
      channelEleven[c].display();
    };
    for (var c = 0; c < emojisList.length; c++) {
      emojisList[c].move();
      emojisList[c].display();
    };


};
