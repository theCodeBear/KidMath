angular.module('mathApp', ['ngRoute', 'mathApp.controllers'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/menu.html'
      }).
      when('/level/:level/:type', {
        templateUrl: '/level.html',
        controller: 'levelController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
//kjhkjh