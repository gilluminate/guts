/*global module:false*/
module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		compass: {
			dist: {
				options: {
					sassDir: 'src',
					cssDir: 'dist',
					environment: 'production',
					outputStyle: 'compressed',
					force: true
				}
			},
			dev: {
				options: {
					sassDir: 'src',
					cssDir: 'src'
				}
			}
		},
		watch: {
			compass: {
				files: ['src/*.scss'],
				tasks: ['compass']
			},
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-notify');

	// Default task.
	grunt.registerTask('default', ['compass']);

};
