const _ = require('lodash');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "watch" : grunt.file.readJSON('grunt-tasks/grunt.watch.tasks.json'),
    "clean" : grunt.file.readJSON('grunt-tasks/grunt.clean.tasks.json'),
    "copy" : grunt.file.readJSON('grunt-tasks/grunt.copy.tasks.json'),
  });


  // Hello callback tasks ...

  grunt.registerTask('hello-task', function () {
    console.log("Hello from taks! ;)");
  });

  // Run Development tasks ...

  grunt.registerTask('start-dev-tasks', [
    'clean:source',
    'copy:source',
    'watch:source'
  ]);

  // Mass register npm tasks added in `project.config.json`

  grunt.registerTask('load-grunt-tasks', function () {
    var projectConfigJson = grunt.file.readJSON('project.config.json');

    var npmTasks = projectConfigJson["grunt-npm-tasks"];

    _.each(npmTasks, function (npmTask, positionOfTaskInArray) {
      grunt.loadNpmTasks(npmTask);
    });

    // grunt.loadNpmTasks('grunt-contrib-clean');
  });

  // Default task(s).
  grunt.registerTask('default', ['load-grunt-tasks']);


  // Development task(s)
  grunt.registerTask('run-dev', [
    'default',
    'start-dev-tasks'
  ]);

};
