module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    
    uglify: {
      options: {
        banner: "<%= meta.banner %>"
      },
      build: {
        src: ['build/app.js'],
        dest: 'build/app.min.js'
      }
    },

    // Concat definitions
    concat: {
      dist: {
        src: ['src/my-plugin.js','src/application.js'],
        dest: "build/app.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Lint definitions
    jshint: {
      files: ["src/application.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // CoffeeScript compilation
    coffee: {
      compile: {
        files: {
          "src/application.js": "src/application.coffee"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['jshint','coffee','concat','uglify']);

};