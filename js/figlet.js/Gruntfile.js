// build time:Sun Feb 07 2021 10:35:54 GMT+0800 (China Standard Time)
"use strict";module.exports=function(t){t.initConfig({jshint:{all:["Gruntfile.js","lib/*.js","<%= nodeunit.tests %>"],options:{jshintrc:".jshintrc"}},clean:{tests:["tmp"]},nodeunit:{tests:["test/*_test.js"]}});t.loadNpmTasks("grunt-contrib-jshint");t.loadNpmTasks("grunt-contrib-clean");t.loadNpmTasks("grunt-contrib-nodeunit");t.registerTask("test",["clean","nodeunit"]);t.registerTask("default",["jshint","test"])};
//rebuild by neat 