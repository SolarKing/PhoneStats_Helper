PhoneStats.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl : './app/components/dashboard/dashboardView.html',
      controller  : 'dashboardController'
    });
});
