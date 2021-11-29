// we define answers
let answers = [
  "42.",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
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
