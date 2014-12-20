
angular.module('mathApp.controllers', [])

// LEVEL CONTROLLER //
.controller('levelController', function($scope, $routeParams) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = parseInt($routeParams.level);//levelFactory.getFactory();
  $scope.tries = 0, $scope.correct = 0, $scope.wrong = 0;
  $scope.answer="";

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
    $scope.tries++;
    if ($scope.answer == undefined) {
      document.getElementById("answer").focus();
      return;
    }
    console.log(mathAnswer($scope.operand1, $scope.operand2)[$scope.operator]);
    document.getElementById("answer").focus();
    if (mathAnswer($scope.operand1, $scope.operand2)[$scope.operator] == $scope.answer) {
      $scope.correct++;
      // $scope.percentage = Math.floor(($scope.correct / ($scope.correct+$scope.wrong)) * 100) || 0;
      toDoOnCorrect($scope, $scope.correct);
    // add class for green flash, remove it a short time later to refresh the animation
      $('body').addClass("green");
      setTimeout(function() {$('body').removeClass("green");}, 100);
      displayProblem();
    } else {
      $scope.wrong++;
      // $scope.percentage = Math.floor(($scope.correct / ($scope.correct+$scope.wrong)) * 100) || 0;
    // add class for red flash, remove it a short time later to refresh the animation
      $('body').addClass("red");
      setTimeout(function() {$('body').removeClass("red");}, 100);
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
})


// TIMED LEVEL CONTROLLER //
.controller('timedLevelController', function($scope, $routeParams) {

  var minutes = function(mins) { return mins * 60 * 1000; };
  var intervalDisplayInMilli = (minutes(2));
  timer(intervalDisplayInMilli/1000);

  var problem;        // hold operands and operator at problem creation
  $scope.level = parseInt($routeParams.level);//levelFactory.getFactory();
  $scope.tries = 0, correct = 0, wrong = 0;

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
    $scope.tries++;
    if ($scope.answer == undefined) {
      document.getElementById("answer").focus();
      return;
    }
    console.log(mathAnswer($scope.operand1, $scope.operand2)[$scope.operator]);
    document.getElementById("answer").focus();
    if (mathAnswer($scope.operand1, $scope.operand2)[$scope.operator] == $scope.answer) {
      correct++;
      // $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      toDoOnCorrect($scope, correct);
    // add class for green flash, remove it a short time later to refresh the animation
      $('body').addClass("green");
      setTimeout(function() {$('body').removeClass("green");}, 100);
      displayProblem();
    } else {
      wrong++;
      // $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
    // add class for red flash, remove it a short time later to refresh the animation
      $('body').addClass("red");
      setTimeout(function() {$('body').removeClass("red");}, 100);
    }
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
  // $scope.lastOp1 = $scope.operand1;
  // $scope.lastOp2 = $scope.operand2;
  // $scope.lastOperator = $scope.operator;
  // $scope.lastAns = $scope.answer;
  $scope.answer = "";
  // document.getElementById("lastProb").style.visibility = "visible";
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
      var op2 = Math.floor(Math.random() * 10);
      var op1 = op2 * Math.floor(Math.random() * 10);
      var operator = '/';
      break;
    case 5:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = ['+','-','x','/'][Math.floor(Math.random() * 4)];
      if (operator == '/')
        op1 = op2 * Math.floor(Math.random() * 10);
      break;
    case 6:
      var op1 = Math.floor(Math.random() * 10);
      var op2 = Math.floor(Math.random() * 10);
      var operator = ['+','-','x','/'][Math.floor(Math.random() * 4)];
      if (operator == '/')
        op1 = op2 * Math.floor(Math.random() * 10);
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



