
angular.module('mathApp.controllers', [/*'mathApp.factories'*/])


// MENU CONTROLLER //
.controller('menu', function($scope, $location/*, levelFactory*/) {
  $scope.goToLevel = function(level) {
    // levelFactory.setLevel(level);
    $location.url('/level'+level);
  }
})

// LEVEL 1 CONTROLLER //
.controller('level1', function($scope/*, levelFactory*/) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = 1;//levelFactory.getFactory();
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
      displayProblem();
    } else {
      wrong++;
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      $scope.validate = "wrong " + wrong + ": " + $scope.percentage + "%";
    }
  }
})

.controller('level2', function($scope) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = 2;
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
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      toDoOnCorrect($scope, correct);
      displayProblem();
    } else {
      wrong++;
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      $scope.validate = "wrong " + wrong + ": " + $scope.percentage + "%";
    }
  }
})

.controller('level3', function($scope) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = 3;
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
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      toDoOnCorrect($scope, correct);
      displayProblem();
    } else {
      wrong++;
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      $scope.validate = "wrong " + wrong + ": " + $scope.percentage + "%";
    }
  }
})

.controller('level4', function($scope) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = 4;
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
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      toDoOnCorrect($scope, correct);
      displayProblem();
    } else {
      wrong++;
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      $scope.validate = "wrong " + wrong + ": " + $scope.percentage + "%";
    }
  }
})

.controller('level5', function($scope) {
  var problem;        // hold operands and operator at problem creation
  $scope.level = 5;
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
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
      toDoOnCorrect($scope, correct);
      displayProblem();
    } else {
      wrong++;
      console.log("correct: " + correct + ", wrong: " + wrong);
      $scope.percentage = Math.floor((correct / (correct+wrong)) * 100) || 0;
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



