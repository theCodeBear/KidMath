angular.module('mathApp', ['ngRoute', 'mathApp.controllers'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/templates/menu.html'
      }).
      when('/level/:level/:type', {
        templateUrl: '/templates/level.html',
        controller: 'levelController'
      }).
      when('/timerStats/:correct/:wrong', {
        templateUrl: '/templates/stats.html',
        controller: 'stats'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
//kjhkjh