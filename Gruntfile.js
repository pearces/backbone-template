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
          'src/js/app.js'
          //TODO: add paths for backbone models, views, router, etc.
        ],
        dest: 'tmp/app.js'
      }
    },
    uglify: {
      options: {
      },
      dist: {
        files: {
          'dist/app.min.js': ['<%= browserify.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks
  grunt.registerTask('default', [
    'jshint',
    'clean',
    'concat',
    'browserify',
    'uglify',
    'copy'
  ]);
};
