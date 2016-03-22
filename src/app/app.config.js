/* main config file */
(function(){'use strict';
  angular
    .module('simpleBlog')
    .config(config);
    
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'src/app/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode({  
      enabled: true,
      requireBase: false})
    .hashPrefix('!');
  }
})();