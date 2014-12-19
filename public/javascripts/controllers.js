
angular.module('mathApp.controllers', [])

// LEVEL CONTROLLER //
.controller('levelController', function($scope, $routeParams) {
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
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      toDoOnCorrect($scope, correct);
    // add class for green flash, remove it a short time later to refresh the animation
      $('body').addClass("green");
      setTimeout(function() {$('body').removeClass("green");}, 100);
      
      displayProblem();
    } else {
      wrong++;
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      $scope.validate = "wrong " + wrong + ": " + $scope.percentage + "%";
    // add class for red flash, remove it a short time later to refresh the animation
      $('body').addClass("red");
      setTimeout(function() {$('body').removeClass("red");}, 100);
    }
  }
});




// FUNCTIONS //

// Does some stuff with the view whenever a correct answer is submitted.
function toDoOnCorrect($scope, correct) {
  $scope.validate = "correct " + correct + ": " + $scope.percentage + "%";
  $scope.lastOp1 = $scope.operand1;
  $scope.lastOp2 = $scope.operand2;
  $scope.lastOperator = $scope.operator;
  $scope.lastAns = $scope.answer;
  $scope.answer = "";
  document.getElementById("lastProb").style.visibility = "visible";
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



