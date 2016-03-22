module.exports = function(grunt){

  // grunt configuration
  grunt.initConfig({

    concat: {
      js: {
        src: ['src/app/app.module.js',
              'src/app/app.config.js',
              'src/app/home.controller.js',
              'src/app/posts/posts.module.js',
              'src/app/posts/posts.config.js',
              'src/app/posts/posts.controller.js',
              'src/app/posts/posts.service.js'],
        dest: 'src/dist/built.js',
      },
    },

    watch: {
      js: {
        files: ['src/app/**/*.js'],
        tasks: ['concat:js'],
      },
    },

    jshint: {
      beforeConcat: ['src/**/*js'],
      afterConcat: ['Gruntfile.js', 'src/dist/**/*.js']
    },

    connect: {
      server: {
        options: {
          port: 8002
        }
      }
    }
  });

  // tasks for loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // registered tasks
  grunt.registerTask('default', ['concat', 'jshint', 'connect', 'watch']);

};