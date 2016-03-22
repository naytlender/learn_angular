/* posts config file */
(function(){'use strict';
  angular
    .module('posts')
    .config(config);
    
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('post', {
        url: '/post/{id}',
        templateUrl: '/src/app/posts/posts.html',
        controller: 'PostsController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode({  
      enabled: true,
      requireBase: false})
    .hashPrefix('!');
  }
})();