
angular.module('mathApp.controllers', [])

// LEVEL CONTROLLER //
.controller('levelController', function($scope, $routeParams) {
  var problem;        // hold operands and operator at problem creation
  var operator;        // used to handle division symbol which wasn't working in mathAnswer()
  $scope.level = parseInt($routeParams.level);//levelFactory.getFactory();
  $scope.correct = 0, $scope.wrong = 0;
  $scope.lastAns = "";
  $scope.answer="";

  if ($routeParams.type == "timed") {
    var minutes = function(mins) { return mins * 60 * 1000; };
    var intervalDisplayInMilli = (minutes(2));
    timer(intervalDisplayInMilli/1000);
    document.getElementById("clock").style.visibility="visible";
  }

  displayProblem();
  document.getElementById("answer").focus();

  // loads problem created in createProblem() into $scope properties for use in controller
  function displayProblem() {
    problem = createProblem($scope.level);
    $scope.operand1 = problem[0];
    $scope.operand2 = problem[1];
    $scope.operator = problem[2];
  }

  // Handles all actions associated with user submitting an answer to a problem
  $scope.submitAnswer = function() {
  // only allow use to answer if input has changed and is not blank
    if ($scope.answer !== $scope.lastAns && $scope.answer !== "") {
      $scope.lastAns = $scope.answer;
      // if division, change from proper division sign to '/' in order to complete calculation
      if ($scope.operator === String.fromCharCode(247))
        operator = '/';
      else
        operator = $scope.operator;
      if (mathAnswer($scope.operand1, $scope.operand2)[operator] == $scope.answer) {
        $scope.correct++;
        $scope.lastAns = "";    // reset lastAns if new question
        toDoOnCorrect($scope, $scope.correct);
      // add class for green flash, remove it a short time later to refresh the animation
        $('body').addClass("green");
        setTimeout(function() {$('body').removeClass("green");}, 100);
        displayProblem();
      } else {
        $scope.wrong++;
      // add class for red flash, remove it a short time later to refresh the animation
        $('body').addClass("red");
        setTimeout(function() {$('body').removeClass("red");}, 100);
      }
    }
  }

  // Handles Number button click: Adds a digit to the answer based on the number button clicked.
  $scope.numberClick = function(digit) {
    $scope.answer += digit;
  }

  // Handles Backspace button click: Deletes last character in the answer.
  $scope.answerBackspace = function() {
    $scope.answer = $scope.answer.split("").slice(0,-1).join("");
  }
});




// FUNCTIONS //

// Timer function that operates recursively to count down.
function timer(time) {
  var clock = formatTime(time);
  if (time < 0) {

    return;
  }
  document.getElementById("clock").innerHTML = clock;
  setTimeout(timer, 1000, --time);
}

// Formats the time displayed on the clock in timer().
function formatTime(time) {
  var secs = (time%60 > 9) ? (time%60) : "0"+(time%60);
  return Math.floor(time/60) + ":" + secs;
}


// Does some stuff with the view whenever a correct answer is submitted.
function toDoOnCorrect($scope, correct) {
  $scope.answer = "";
}

// Create the operands and operators for each level of Math.
function createProblem(level) {
  switch(level) {
    case 1:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = "+";
      break;
    case 2:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = '-';
      break;
    case 3:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = 'x';
      break;
    case 4:
      var op2 = Math.floor(Math.random() * 10) + 1;   // +1 to avoid division by zero
      var op1 = op2 * Math.floor(Math.random() * 10);
      var operator = String.fromCharCode(247);
      break;
    case 5:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = ['+','-','x',String.fromCharCode(247)][Math.floor(Math.random() * 4)];
      if (operator == String.fromCharCode(247)) {
        op1 = op2 * Math.floor(Math.random() * 10);
        if (op2 == 0)
          op2 = Math.floor(Math.random() * 10) + 1;
      }
      break;
    case 6:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = ['+','-','x',String.fromCharCode(247)][Math.floor(Math.random() * 4)];
      if (operator == String.fromCharCode(247)) {
        op1 = op2 * Math.floor(Math.random() * 10);
        if (op2 == 0)
          op2 = Math.floor(Math.random() * 10) + 1;   // +1 to avoid division by zero
      }
      break;
  }
  return [op1,op2,operator];
}

// Calculates answers for whatever operator is used.
function mathAnswer(x,y) {
  return {
    "+": function(x,y) { return x + y; }(x,y),
    "-": function(x,y) { return x - y; }(x,y),
    "x": function(x,y) { return x * y; }(x,y),
    "/": function(x,y) { return Math.round(x / y); }(x,y)   // rounding off division for now
  }
}



