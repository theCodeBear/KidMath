angular.module('mathApp', ['ngRoute', 'mathApp.controllers'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/menu.html',
        controller: 'menu'
      }).
      when('/level1', {
        templateUrl: '/level.html',
        controller: 'level1'
      }).
      when('/level2', {
        templateUrl: 'level.html',
        controller: 'level2'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
