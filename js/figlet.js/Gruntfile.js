// build time:Wed May 13 2020 18:06:58 GMT+0800 (GMT+08:00)
"use strict";module.exports=function(t){t.initConfig({jshint:{all:["Gruntfile.js","lib/*.js","<%= nodeunit.tests %>"],options:{jshintrc:".jshintrc"}},clean:{tests:["tmp"]},nodeunit:{tests:["test/*_test.js"]}});t.loadNpmTasks("grunt-contrib-jshint");t.loadNpmTasks("grunt-contrib-clean");t.loadNpmTasks("grunt-contrib-nodeunit");t.registerTask("test",["clean","nodeunit"]);t.registerTask("default",["jshint","test"])};
//rebuild by neat 