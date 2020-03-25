"use strict";

let quotes = [
  "Ah, your brother blows bubble gum!",
  "Also a wabbit hater!",
  "And remember, ‘mud’ spelled backwards is ‘dum’.",
  "Carrots are devine… You get a dozen for a dime, It’s maaaa-gic!",
  "Do you happen to know what the penalty is for shooting a fricaseeing rabbit without a fricaseeing rabbit license?",
  "Don’t take life too seriously. You’ll never get out alive!",
  "Don’t think it hasn’t been a little slice of heaven…’cause it hasn’t!",
  "Eeeeeeh, watch me paste that pathetic palooka with a powerful, pachydermous, percussion pitch.",
  "Eh, what’s up, doc?",
  "For shame, doc. Hunting rabbits with an elephant gun. Why don’t you shoot yourself an elephant?",
  "Gee, ain’t I a stinker?",
  "Here I go with the timid little woodland creature bit again. It’s shameful, but…ehhh, it’s a living.",
  "Hey, I found Nemo!",
  "I bet you say that to all the wabbits.",
  "I knew I shoulda taken that left turn at Albuquerque!",
  "I know this defies the law of gravity, but I never studied law!",
  "I wonder what the poor bunnies are doing this season?",
  "If an interesting monster can’t have an interesting hairdo I don’t know what this world is coming to.",
  "If it’s the Captain’s Mess, let him clean it up.",
  "I’ll be scared later. Right now I’m too mad.",
  "I’m just a little wabbit!",
  "Jumpin’ without a parachute? Kinda dangerous, ain’t it?",
  "My, I’ll bet you monsters lead innnnteresting lives.",
  "Of course you realize this means war!",
  "Oh well, maybe I can shine it up and use it for an ashtray.",
  "Oh, well, we almost had a romantic ending!",
  "OOH! Look at four-legged airplane!",
  "Shhhhhhhh! I’m about to defy you.",
  "The way I run this thing you’d think I knew something about it.",
  "Well, it’s 5 o’clock somewhere.",
  "Well, what did you expect in an opera? A happy ending?",
  "What an embezzle! What an ultramaroon!"
];

//MDN recommended
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function talk() {
  let buttonText = document.getElementsByClassName("talkText")[0];
  let newQuote = quotes[getRandomInt(0, quotes.length - 1)];
  buttonText.childNodes[0].nodeValue = ('"' + newQuote + '"');
}
