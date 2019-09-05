//Globals at top
let score = 0;
let currentQuestion = 0;

let questions = [
  {
    title: "Who won the UEFA Supercup in 2019?",
    answers: ["Liverpool", "Chelsea", "Real Madrid", "Ajax"],
    correct: 1
  },

  {
    title: "Who won the Premier League title in 2019?",
    answers: ["Liverpool", "Manchester City", "Arsenal", "Chelsea"],
    correct: 2
  },

  {
    title: "Who won the 2019 FA cup Final?",
    answers: ["Manchester City", "Watford", "Derby County", "Arsenal"],
    correct: 1
  },

  {
    title: "Who won the Champions League Final in 2019?",
    answers: ["Tottenham", "Ajax", "Liverpool", "Chelsea"],
    correct: 2
  },

  {
    title: "Who won the La Liga title in 2019?",
    answers: ["Valencia", "Real Betis", "Real Madrid", "Barcelona"],
    correct: 3
  },

  {
    title: "Who won La Copa del Rey in 2019?",
    answers: ["Valencia", "Barcelona", "Villareal", "Getafe"],
    correct: 0
  },

  {
    title: "Lionel Messi play for what team 2018- 2019:",
    answers: ["Valencia", "Real Madrid", "Barcelona", "Bayern Muncih"],
    correct: 2
  },

  {
    title: "Cristiano Ronaldo plays for what team 2018- 2019:",
    answers: ["Real Madrid", "Juventus", "Manchester United", "Sporting CP"],
    correct: 1
  },

  {
    title: "Neymar play for what team 2018-2019:",
    answers: ["Santos", "Borrusia Dortmund", "Ajax", "PSG"],
    correct: 3
  },

  {
    title: "Eden Hazard plays for what team currently:",
    answers: ["Chelsea", "Lyon", "Real Madrid", "Barcelona"],
    correct: 2
  }
];

//Event Listeners in the Middle
$(document).ready(function() {
  //At the start I have an anchor tag when I click on it I want to pass in on the event
  $(".start a").click(function(e) {
    e.preventDefault();
    //When I start quiz first thing I want to do is hide the start area
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
  });

});


  //Functions at the bottom

  function showQuestion() {
    //this represents 0 we are getting the first question
    let question = questions[currentQuestion];
    $(".quiz h2").text(question.title);
    //will allow us to clear out li's that were already there
    $(".quiz ol").html("");
    for (var i = 0; i < questions.answers.length; i++) {
      //this will allow us to append so it has an id of 0,1,2,3 to represent the answer
      $("quiz ul").append(`<li id="${i}"> ${question.answers[i]}</li>`);
    }
  }

  function checkAnswer(guess) {
    let question = questions[currentQuestion];

    if (question.correct === guess) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      showSummmary();
    } else {
      showQuestion();
    }
  }
  function showSummary() {
    $("quiz").hide(), $(".summary").show();
    $(".summary p").text(
      "Congrats you scored " +
        score +
        " out of " +
        questions.length +
        " correct!"
    );
  }
  function restartQuiz() {
    //Don't need let variables were defined at top
    score = 0;
    currentQuestion = 0;
    showQuestion();
  }
