// we define answers
let answers = [
  "42.",
  "Haha.",
  "You should get that tattooed bro",
  "1. Put in a box. 2. Throw box away.",
  "Talk to your mom about it",
  "Ah I see. Yes.",
  "Meh.",
  "Go f yourself friend.",
  "Yes, i guess",
  "The star tell me that maybe",
  "For sure honey!!",
  "My reply is    no.",
  "I dont want to answer THAT",
  "Go girl !!!!!!",
  "Forget about it",
  "Was it your idea ?...",
  "Ask again never. thx xoxo",
  "If your friends did it, would you ?",
  "Not in the mood now, ask later",
  "Try and sound smart, ask again",
  "Sleep on it",
  "Go for a walk and ask your village idiot",
  "Think.... just for a minute bro",
  "You already know the answer freak",
];

let eight = document.querySelector("#eight");
let answer = document.querySelector("#answer");
let eightball = document.querySelector("#eight-ball");
let question = document.querySelector("#question");

window.addEventListener("load", sidenVises);

function sidenVises() {
  eightball.addEventListener("click", clickEightBall);
}

function clickEightBall() {
  if (question.value.length < 1) {
    alert("Did you forget your question?");
  } else {
    eight.textContent = "";
    let num = Math.floor(Math.random() * Math.floor(answers.length));
    console.log(num);
    answer.textContent = answers[num];
  }
}
