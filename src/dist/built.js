/* Main module */
(function(){'use strict';
  angular
    .module('simpleBlog', ['posts', 'ui.router']); 
})();
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
/* home controller */
(function(){'use strict';
  angular
    .module('simpleBlog')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['postsService'];
    function HomeController(postsService){
      var vm = this;
      
      vm.title = '';
      vm.body = '';
      vm.posts = [];
      vm.posts = postsService.getPosts();
      vm.incrUpvotes = incrUpvotes;
      vm.addPost = addPost;

      function addPost(){
        postsService.addPost(vm.title, vm.body);
        vm.title = '';
        vm.body = '';
      }

      function incrUpvotes(post){
        post.upvotes += 1;
      }
    }
})();
/* posts module */
(function(){'use srtict';
  angular
    .module('posts', ['ui.router']);
})();
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
/* posts controller */
(function(){'use strict';
  angular
    .module('posts')
    .controller('PostsController', PostsController);

    PostsController.$inject = ['postsService', '$stateParams'];
    function PostsController(postsService, $stateParams){
      var vm = this;

      vm.body = '';
      vm.post = {};
      vm.incrUpvotes = incrUpvotes;
      vm.addComment = addComment;
      getPost();

      function getPost(){
        vm.post = postsService.getPost($stateParams.id);
      }

      function incrUpvotes(post){
        post.upvotes += 1;
      }

      function addComment(){
        var comment = {
          body: vm.body,
          author: 'user',
          upvotes: 0
        };
        vm.post.comments.push(comment);
        console.log(vm.post.comments);
        
        vm.body = '';
      }
    }
})();
/* post service */
(function(){'use strict';
  angular
    .module('posts')
    .factory('postsService', postsService);

  function postsService(){

    var posts = [
        {id: 1, title: 'post 1', body: 'body for the post number: 1', upvotes: 5, comments: []},
        {id: 2, title: 'post 2', body: 'body for the post number: 2', upvotes: 2, comments: [{
          body: 'comment body',
          author: 'user',
          upvotes: 0
        }]},
        {id: 3, title: 'post 3', body: 'body for the post number: 3', upvotes: 15, comments: []},
        {id: 4, title: 'post 4', body: 'body for the post number: 4', upvotes: 9, comments: []},
        {id: 5, title: 'post 5', body: 'body for the post number: 5', upvotes: 4, comments: []}
      ];

    function getPosts(){
      return posts;
    }

    function addPost(postTitle, postBody){
      var post = {};
      post = {
        id: posts.length + 1,
        title: postTitle, 
        body: postBody,
        upvotes: 0,
        comments: []
      };
      posts.push(post);
    }

    function getPost(postId){
      var post = posts[postId - 1];
      return post;
    }

    function addComment(post){

    }

    return {
      getPosts: getPosts,
      addPost: addPost,
      getPost: getPost,
      addComment: addComment
    };
  }
})();