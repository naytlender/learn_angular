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