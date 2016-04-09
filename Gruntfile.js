"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: [
          'src/js/core.js',
          'src/js/models/**/*.js',
          'src/js/collections/**/*.js',
          'src/js/views/**/*.js',
          'src/js/routers/**/*.js',
          'src/js/app.js'
        ],
        dest: 'tmp/app.js'
      }
    },
    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true
      },
      dist: {
        files: {
          'dist/js/app.min.js': ['<%= browserify.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globalstrict: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          require: true,
          window: true,
          app: true,
          global: true,
          $: true,
          _: true,
          Backbone: true
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '*.html',
        dest: 'dist/',
        flatten: true
      }
    },
    browserify: {
      dist: {
        src: [
          'tmp/app.js'
        ],
        dest: 'tmp/app.js'
      }
    },
    clean: {
      dist: ['tmp', 'dist']
    },
    less: {
      options: {
        compress: true
      },
      dist: {
        files: {
          'tmp/app.css': 'src/less/*.less'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/app.min.css': 'tmp/app.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks
  grunt.registerTask('default', [
    'jshint',
    'clean',
    'concat',
    'browserify',
    'less',
    'uglify',
    'cssmin',
    'copy'
  ]);
};
