module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: [
          'tmp/**/*.js',
          'src/**/*.js',
          '!src/**/libs.js'
        ],
        dest: 'tmp/app.js'
      }
    },
    uglify: {
      options: {
      },
      dist: {
        files: {
          'dist/app.min.js': ['<%= concat.dist.dest %>']
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
        files: {
          'tmp/libs.js': 'src/js/libs.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  //TODO: add clean task for tmp, dist

  // Default tasks
  grunt.registerTask('default', [
    'browserify',
    'jshint',
    'concat',
    'uglify',
    'copy'
  ]);
};
