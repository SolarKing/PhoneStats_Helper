

var PhoneStats  = angular.module('PhoneStats', ['ui.router']);

PhoneStats.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl : './app/components/dashboard/dashboardView.html',
      controller  : 'dashboardController'
    });
});

PhoneStats.controller('dashboardController', function($scope) {
  $scope.message = 'Everyone come and see how awesome this is!'
});

