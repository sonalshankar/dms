module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Tasks
		serve: {
			options: {
				port: 9000
			}
		},
		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded',
		        sourcemap: 'none'
		      },
		      files: {                         // Dictionary of files
		        'app/webserver/css/main.css': 'app/webserver/sass/main.scss' // 'destination': 'source'
		      }
		    }
		  }
		});
	
	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('appServe', ['serve']);//serve
	//http://localhost:9000/app/index.html#/about
	//http://localhost:9000/test/WebContent/index.html#/dms
	grunt.registerTask('sass2css', ['sass']);
	
};