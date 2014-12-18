angular.module('mathApp', ['ngRoute', 'mathApp.controllers'/*, 'mathApp.factories'*/])

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
        templateUrl: '/level.html',
        controller: 'level2'
      }).
      when('/level3', {
        templateUrl: '/level.html',
        controller: 'level3'
      }).
      when('/level4', {
        templateUrl: '/level.html',
        controller: 'level4'
      }).
      when('/level5', {
        templateUrl: '/level.html',
        controller: 'level5'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
