module.exports = function (grunt) {

	grunt.initConfig({

		user: {
			name: 'Your Name',
			email: 'your@email.com',
		},
		

		banner: '/** <%= user.name %> <<%= user.email %>> - Copyright (c) <%= grunt.template.today("yyyy") %> */\n',

		paths: {
			assets: 'site/templates/assets',
			styles: '<%= paths.assets %>/css',
			scripts: '<%= paths.assets %>/js',
			plugins: '<%= paths.scripts %>/lib/plugins'
		},

		sass: {
			dev: {
				options: {
					precision: 6
				},
				files: {
					'<%= paths.styles %>/main.css': ['<%= paths.styles %>/main.scss']
				}
			},
			prod: {
				options: {
					precision: 6,
					style: 'compressed'
					// banner: '<%= banner %>' Notice: The banner option has been removed from grunt-contrib-sass
				},
				files: {
					'<%= paths.styles %>/main.min.css': ['<%= paths.styles %>/main.scss']
				}
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			all: {
				files: {
					'<%= paths.scripts %>/app.min.js' : [
						'<%= paths.scripts %>/app/myModule.js',
						'<%= paths.scripts %>/main.js'
					]
				}
			}
		},

		watch: {
			dev: {
				files: [
					'<%= paths.styles %>/main.scss',
					'<%= paths.styles %>/project/*.scss',
					'<%= paths.styles %>/project/**/*.scss'
				],
				tasks: ['sass:dev']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('deploy', ['sass:prod', 'uglify']);

};