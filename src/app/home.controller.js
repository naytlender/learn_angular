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