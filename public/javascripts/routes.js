angular.module('mathApp', ['ngRoute', 'mathApp.controllers'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/menu.html'
      }).
      when('/level/:level', {
        templateUrl: '/level.html',
        controller: 'levelController'
      }).
      when('/timedlevel/:level', {
        templateUrl: '/timedLevel.html',
        controller: 'timedLevelController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
