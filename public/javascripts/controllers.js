
angular.module('mathApp.controllers', [])

.controller('menu', function($scope, $location) {
  $scope.goToLevel1 = function(event){
    $location.url('/level1');
  }
})

.controller('level1', function($scope) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = 1;
  $scope.tries = 0, correct = 0, wrong = 0;
  displayProblem();
  document.getElementById("answer").focus();

  function displayProblem() {
    problem = createProblem($scope.level);
    $scope.operand1 = problem[0];
    $scope.operand2 = problem[1];
    $scope.operator = problem[2];
  }
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
      $scope.percentage = Math.floor((correct / correct+wrong) * 100) || 0;
      toDoOnCorrect($scope, correct);
      displayProblem();
    } else {
      wrong++;
      $scope.percentage = Math.floor((correct / correct+wrong) * 100) || 0;
      $scope.validate = "wrong " + wrong + ": " + $scope.percentage + "%";
    }
  }
});

//  PERCENTAGE AIN'T WORKING RIGHT!

// FUNCTIONS

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
      var operator = ["+","-","*","/"][Math.floor(Math.random() * 4)];
      return [op1, op2, operator];
      break;
    case 2:
      break;
  }
}

// Calculates answers for whatever operator is used.
function mathAnswer(x,y) {
  return {
    "+": function(x,y) { return x + y; }(x,y),
    "-": function(x,y) { return x - y; }(x,y),
    "*": function(x,y) { return x * y; }(x,y),
    "/": function(x,y) { return Math.round(x / y); }(x,y)   // rounding off division for now
  }
}



