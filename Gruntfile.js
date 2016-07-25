// наша функция-обёртка (требуется для Grunt и его плагинов)
// все настройки располагаются внутри этой функции
module.exports = function(grunt) {

  // ===========================================================================
  // НАСТРОЙКА GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // получить конфигурацию из package.json 
    // так мы можем использовать штуки вроде name и version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // вся наша конфигурация будет здесь
 	// настройка jshint для валидации JS-файлов
	sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                'dist/css/animate.css' : 'src/css/animate.scss',
		        'dist/css/bootstrap.min.css' : 'src/css/bootstrap.scss',
		        'dist/css/responsive.min.css' : 'src/css/responsive.scss',
		        'dist/css/slick-theme.min.css' : 'src/css/slick-theme.scss',
		        'dist/css/slick.min.css' : 'src/css/slick.scss',
		        'dist/css/style.min.css' : 'src/css/style.scss'
            }
        }
    },
	jshint: {
		options: {
		  reporter: require('jshint-stylish') // используйте jshint-stylish для наглядного представления ошибок
		},

		// при запуске этой задачи анализируется файл Gruntfile.js и все JS-файлы в src
		build: ['Gruntfile.js', 'src/**/*.js']
	},
	// настройка uglify для минимизации JS-файлов
	uglify: {
		options: {
		  banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		},
		build: {
		  files: [{
		    'dist/js/easing.1.3.min.js': 'src/js/easing.1.3.js',
		    'dist/js/main.min.js': 'src/js/main.js',
		    'dist/js/scrollToFixed.min.js': 'src/js/scrollToFixed.js',
		    'dist/js/slick.min.js': 'src/js/slick.min.js',
		    'dist/js/wow.min.js': 'src/js/wow.js'
		  }]
		}
	},
	imagemin: {                          // Task
	    dynamic: {                         // Another target
	      options: {                       // Target options
	        optimizationLevel: 3
	      },
	      files: [{
	        expand: true,                  // Enable dynamic expansion
	        cwd: 'src/images',                   // Src matches are relative to this path
	        src: ['*.{png,jpg,gif,svg,jpeg}'],   // Actual patterns to match
	        dest: 'dist/images'                  // Destination path prefix
	      }]
	    }
	},
	copy: {
		main: {
			expand: true,
			cwd: 'src/fonts/',
			src: '*.*',
			dest: 'dist/fonts/'
		}
	}

  });
 
  // ===========================================================================
  // ЗАГРУЗКА ПЛАГИНОВ GRUNT ===================================================
  // ===========================================================================
  // мы можем их загрузить, только если они находятся в нашем package.json
  // убедитесь, что вы запустили npm install, чтобы наше приложение могло их найти
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['copy', 'uglify', 'imagemin', 'sass']);
  //grunt.registerTask('default', ['imagemin']);
};