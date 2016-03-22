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